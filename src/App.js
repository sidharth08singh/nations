import 'bulma/css/bulma.css'
import NationCard from "./NationCard";
import IndiaFlag from "./images/flag_india.png"
import GermanyFlag from "./images/flag_germany.png"
import USAFlag from "./images/flag_usa.png"

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Geography Now
                    </p>
                </div> 
            </section>
            
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <NationCard 
                                countryName="India" 
                                capital="New Delhi" 
                                image={IndiaFlag}
                                description="India is located in South Asia and it is the spiritual powerhouse of the world"
                            />
                        </div>
                        <div className='column is-3'>
                            <NationCard 
                                countryName="Germany" 
                                capital="Berlin" 
                                image={GermanyFlag}
                                description="Germany is located in Western Europe and it is the economic powerhouse of the European Union"
                            />
                        </div>
                        <div className='column is-3'>
                            <NationCard 
                                countryName="United States" 
                                capital="Washington D.C" 
                                image={USAFlag}
                                description="United States is located in North America and it is the technological and scientific powerhouse of the world"
                            />
                        </div>
                    </div>
                </section>
            </div>

            
           
            
        </div>
    );
}

export default App;