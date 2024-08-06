import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

const Page = () => {
    return (
        <div className="Page">
            <NavBar/>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Footer/>
        </div>
    )
}

export default Page;