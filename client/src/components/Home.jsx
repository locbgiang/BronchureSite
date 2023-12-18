import img1 from './image/Untitled.png'

export default function Home (){
    return (
        <div className='home'>
            <img src={img1} alt="Bronchure" className="brochure-image" />
            <div className="text-overlay">
                <h1>Welcome to Our Brochure Website</h1>
                <p>Discover amazing products and services that suit your needs.</p>
            </div>
        </div>
    )
}