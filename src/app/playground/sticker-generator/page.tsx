"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Download, Trash2 } from "lucide-react";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function StickerGeneratorPage() {
  const [image, setImage] = useState<string | null>(null);
  const [borderColor, setBorderColor] = useState("#FF5733");
  const [borderWidth, setBorderWidth] = useState(10);
  const [hasShadow, setHasShadow] = useState(true);
  const [shadowOffset, setShadowOffset] = useState(5);
  const [text, setText] = useState("");
  const [font, setFont] = useState("Poppins");
  const [fontSize, setFontSize] = useState(16);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
          setResult(null);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
          setResult(null);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const clearImage = () => {
    setImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const generateSticker = () => {
    if (!image) return;
    
    setIsProcessing(true);
    
    // Create a new image element to work with
    const img = new Image();
    img.src = image;
    
    img.onload = () => {
      // Create a canvas to draw our sticker
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        setIsProcessing(false);
        return;
      }
      
      // Set canvas size with extra space for border
      const extraSpace = borderWidth * 2 + (hasShadow ? shadowOffset * 2 : 0);
      canvas.width = img.width + extraSpace;
      canvas.height = img.height + extraSpace + (text ? fontSize * 2 : 0);
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate position to center the image
      const x = borderWidth + (hasShadow ? shadowOffset : 0);
      const y = borderWidth + (hasShadow ? shadowOffset : 0);
      
      // Draw shadow if enabled
      if (hasShadow) {
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = borderWidth;
        ctx.shadowOffsetX = shadowOffset;
        ctx.shadowOffsetY = shadowOffset;
        ctx.drawImage(img, x, y, img.width, img.height);
        ctx.restore();
      }
      
      // Draw border
      ctx.save();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      ctx.beginPath();
      ctx.rect(x - borderWidth/2, y - borderWidth/2, 
               img.width + borderWidth, img.height + borderWidth);
      ctx.stroke();
      ctx.restore();
      
      // Draw the image
      ctx.drawImage(img, x, y, img.width, img.height);
      
      // Add text if provided
      if (text) {
        ctx.save();
        ctx.fillStyle = borderColor;
        ctx.font = `${fontSize}px ${font === 'Poppins' ? 'Poppins, sans-serif' : 'Arial, sans-serif'}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(text, canvas.width / 2, y + img.height + borderWidth/2, canvas.width - borderWidth*2);
        ctx.restore();
      }
      
      // Convert canvas to data URL
      const dataUrl = canvas.toDataURL('image/png');
      setResult(dataUrl);
      setIsProcessing(false);
    };
    
    img.onerror = () => {
      setIsProcessing(false);
    };
  };

  const downloadSticker = () => {
    if (!result) return;
    
    const link = document.createElement('a');
    link.href = result;
    link.download = 'custom-sticker.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="pt-8 px-4 pb-12 ml-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link
            href="/playground"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Playground</span>
          </Link>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Sticker Generator</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create custom stickers with borders, shadows, and text from your images.
            Upload an image with a transparent background for best results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            
            <div 
              className="border-2 border-dashed border-border rounded-lg p-8 mb-4 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {image ? (
                <div className="relative w-full">
                  <img 
                    src={image} 
                    alt="Uploaded" 
                    className="max-w-full max-h-64 mx-auto object-contain"
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      clearImage();
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Drag and drop an image here, or click to select
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Supports PNG, JPG, GIF (PNG with transparency recommended)
                  </p>
                </>
              )}
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            <h2 className="text-xl font-semibold mb-4">Sticker Options</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Border Color</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="color" 
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer"
                  />
                  <input 
                    type="text" 
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="flex-1 bg-background border border-border rounded-md px-3 py-2"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Border Width</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="w-8 text-center">{borderWidth}px</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="shadow-toggle"
                  checked={hasShadow}
                  onChange={(e) => setHasShadow(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="shadow-toggle" className="text-sm font-medium">Add Shadow</label>
              </div>
              
              {hasShadow && (
                <div>
                  <label className="block text-sm font-medium mb-1">Shadow Offset</label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="range" 
                      min="1" 
                      max="20" 
                      value={shadowOffset}
                      onChange={(e) => setShadowOffset(parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <span className="w-8 text-center">{shadowOffset}px</span>
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium mb-1">Text (Optional)</label>
                <input 
                  type="text" 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Add text to your sticker"
                  className="w-full bg-background border border-border rounded-md px-3 py-2"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Font</label>
                <select 
                  value={font}
                  onChange={(e) => setFont(e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-3 py-2"
                >
                  <option value="Poppins">Poppins</option>
                  <option value="ZT Form">ZT Form</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Font Size</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="range" 
                    min="8" 
                    max="36" 
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="w-8 text-center">{fontSize}px</span>
                </div>
              </div>
              
              <button 
                onClick={generateSticker}
                disabled={!image || isProcessing}
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Generate Sticker"}
              </button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            
            <div className="border border-border rounded-lg p-4 h-[400px] flex items-center justify-center bg-muted/30">
              {result ? (
                <div className="text-center">
                  <img 
                    src={result} 
                    alt="Generated Sticker" 
                    className="max-w-full max-h-64 mx-auto object-contain mb-4"
                  />
                  <button 
                    onClick={downloadSticker}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download Sticker
                  </button>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  {isProcessing ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
                      <p>Processing your sticker...</p>
                    </div>
                  ) : (
                    <p>Your sticker preview will appear here</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="mt-6 bg-muted/30 rounded-lg p-4">
              <h3 className="font-medium mb-2">How It Works</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Upload an image (PNG with transparency works best)</li>
                <li>Customize your sticker with border, shadow, and text options</li>
                <li>Click "Generate Sticker" to create your custom sticker</li>
                <li>Download your sticker to use anywhere!</li>
              </ol>
              
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium">Note:</p>
                <p>This is a frontend demo. In a full implementation, image processing would happen on a server using libraries like Python's Pillow.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">About This Tool</h2>
          <p className="text-muted-foreground mb-4">
            This sticker generator allows you to create custom stickers from your images by adding borders, shadows, and text. It's perfect for creating digital stickers for social media, messaging apps, or digital planners.
          </p>
          <p className="text-muted-foreground">
            For best results, use PNG images with transparent backgrounds. The tool will outline your image with a custom border, add an optional shadow for depth, and include text if desired.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}