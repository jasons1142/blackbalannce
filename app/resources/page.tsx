import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Header from "@/components/header"
export default function Resources() {
    return (
        <div>
            <main className = "bg-stone-200 min-h-screen">
                <Header />
                <Navbar/>
                <h1 className = "text-center text-black font-bold text-xl mt-5">Below are resources that can be helpful on your mental health journey</h1>
                <label className = "text-black ml-2 font-bold">Mental Health & Wellness</label>
                <ul className = "text-black ml-5">
                    <li></li>
                </ul>

                <label className = "text-black ml-2 font-bold">Identity & Empowerment</label>
                <ul className = "text-black ml-5">
                    <li></li>
                </ul>

                <label className = "text-black ml-2 font-bold">Self-Care & Tools</label>

            </main>
            <Footer/> 
        </div>
    )
}