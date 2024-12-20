

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-xl sm:text-3xl font-bold mb-6">Welcome to the Chat App</h1>
    <a
      href="/chat"
      className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
    >
      Start Chatting
    </a>
  </main>
  );
}
