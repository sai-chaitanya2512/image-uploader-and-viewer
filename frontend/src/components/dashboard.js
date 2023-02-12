import { Carousel } from 'antd';
import "../styles/dash.scss"
import axios from 'axios'
import { useEffect, useState } from 'react';
export default function Dash (){
    const [imageSelected, setImageSelected] = useState("");
    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "uagq7s19");
    
        axios.post(
          "https://api.cloudinary.com/v1_1/djsajkg6i/image/upload ",
          formData
        ).then((res) => {
            console.log(res);
            axios.post("http://localhost:1000/image/addImage",{image:res.data.url})
        });
        image()
        
      };

    const clicked=()=>{
        localStorage.setItem("id"," ")
    }
    const contentStyle= {
        height: '80vh',

        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

      const [imagg,setImg] = useState("")

const image = async()=>{

    const data =await axios.post("http://localhost:1000/image/getPictures")
    setImg(data)
}


    


    return(
        <>
            <div className="dashContainer">
            <div className='nav'>
                <div onClick={image}>Get mages</div>
                <div>
                <input

                  type="file"
                  name="image"
                  onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                  }}

                />
                </div>
                <div onClick={uploadImage}>
                    upload
                </div>
            </div>
            <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
<img src='https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width='100%' height='100%'  />

      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
 <img src='https://images.pexels.com/photos/1098743/pexels-photo-1098743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width='100%'  height='100%' />

      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
<img src='https://images.pexels.com/photos/1098743/pexels-photo-1098743.jpeg' width='100%'  height='100%' />

      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
<img src='https://images.pexels.com/photos/1098743/pexels-photo-1098743.jpeg' width='100%' height='100%' />

      </h3>
    </div>
  </Carousel>


            </div>

            <div className='imgc'>
                {
                    imagg && imagg.data && imagg.data.map((e)=>{
                        console.log(e);
                        return(
                            <>
                                <img src={e.image} width='50%' height='100%' />
                            </>
                        )
                    })
                }
                <img />
            </div>
        </>
    )
}
