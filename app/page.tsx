import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Header from "@/components/header"
export default function HomePage() {
  return (
    <div>
      <main className = "bg-stone-200 min-h-screen">
        <Header />
        <Navbar/>
        <div className = "bg-gray-600 p-15 rounded-lg text-white w-full max-w-xl mx-auto mt-30">
          <p>Welcome to BlackBalannce a webpage designed to focus on the mental needs of black people.
            On this site you will find mental health resources, a personal notebook, and a friendly forum to communicate with others.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
    
    
  )
}
