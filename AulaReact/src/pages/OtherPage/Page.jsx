import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Page = () => {
    return (
        <div className="Page">
            <NavBar/>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
                    <h1 className="text-2xl font-bold text-blue-900">Hello, Vite with Tailwind!</h1>
                    <p className="text-gray-600">This is a simple example of a React component styled with Tailwind CSS.</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Click Me
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Page;