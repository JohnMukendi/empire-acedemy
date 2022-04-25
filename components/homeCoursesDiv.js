


var gradient = "linear-gradient(rgba(240,240,250,0.87),rgba(220,220,250,0.7))";

const CoursesDiv = ()=>(
    <div
        style={{ backgroundImage: `${gradient},url(/it.jpeg)`, height: "400px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
        
        <h4
            style={{ textAlign: "center", fontSize: "28px", padding: "20px", color: "black", borderBottom: "3px dotted rgb(10,10,140)" }}
        >
            INFORMATION TECHNOLOGIES
        </h4>
        <div
            style={{ display: "flex", height: "80%", alignItems: "center", padding: "0px 40px" }}>
            <p style={{ color: "black", fontSize: "22px", textAlign: "center", lineHeight: "1.5" }}>
                    
            </p>
        </div>

    </div>
)

export default CoursesDiv