import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Header from "@/components/header"
export default function Resources() {
    return (
        <div>
            <main className = "bg-stone-200 min-h-screen">
                <Header />
                <Navbar/>
                <h1 className = "text-center text-black">Below are resources that can be helpful for your mental health journey</h1>
            </main>
            <Footer/> 
        </div>
    )
}