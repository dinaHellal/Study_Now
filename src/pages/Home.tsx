
function Home() {
  return (
    <div>
      <header id="Home" className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">Study Now</h1>
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/booking">Book Leason</a>
          <a href="/login"> Login</a>
        </nav>
      </header>

      <main className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Book your lesson easily</h2>
        <p className="mb-6">Start learning with teacher [teacher's name]</p>
        <a href="/booking" className="bg-indigo-500 text-white py-2 px-4 rounded">
Book Now        </a>
      </main>
    </div>
  );
}

export default Home;
