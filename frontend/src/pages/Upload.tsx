import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Dropzone } from '../components/upload/Dropzone';
import { Button } from '../components/ui/Button';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setUploadSuccess(false);
  };

  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate API upload delay
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
    }, 2000);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Upload Dataset</h2>
        <p className="text-muted-foreground">
          Upload your raw data here to begin the machine learning pipeline.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select File</CardTitle>
          <CardDescription>
            Supported formats include .csv and .json. Max size 50MB.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!uploadSuccess ? (
            <>
              <Dropzone
                onFileSelect={handleFileSelect}
                isLoading={isUploading}
                allowedTypes={['.csv', '.json']}
              />
              
              {file && !isUploading && (
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-accent p-2">
                      <FileText className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button onClick={handleUpload}>
                    Start Upload
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <div className="rounded-full bg-green-500/15 p-4">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Upload Complete</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {file?.name} has been successfully uploaded and saved.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <Button variant="outline" onClick={() => setUploadSuccess(false)}>
                  Upload Another
                </Button>
                <Button>
                  Proceed to Training
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
