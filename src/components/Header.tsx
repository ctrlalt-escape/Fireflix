// src/components/Header.tsx
const Header = () => {
  return (
    <header className="relative h-[400px] rounded-b-[50px] overflow-hidden flex items-end p-6 bg-cover bg-center" 
      style={{ backgroundImage: `url('https://broadway.thecosmiccircus.com/wp-content/uploads/2024/12/Mufasa-The-Lion-King-Banner.jpg')` }}>
      <div className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
        Welcome to FireFlix, created by Rohan. A great place to watch movies and shows.
      </div>
    </header>
  );
};

export default Header;
