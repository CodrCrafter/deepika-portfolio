
const Index = () => {
  // Redirect to the main portfolio page
  window.location.href = '/';
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Loading Portfolio...</h1>
        <p className="text-xl text-muted-foreground">Redirecting to main page...</p>
      </div>
    </div>
  );
};

export default Index;
