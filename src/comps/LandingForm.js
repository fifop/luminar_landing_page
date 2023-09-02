// import React, { useState } from 'react';
import './LandingForm.css';
import {useForm} from 'react-hook-form'


function LandingForm() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    const{register, handleSubmit , formState: { errors } } = useForm();
    
    const onSub =async (bodyData)=>{
           console.log(bodyData);

           try{
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyData)
           });

           const result = await response.json();
           console.log('Success:', result);

             } catch(error){
                console.error('Error:', error);

             }
            }

    // const handleSubmitE = (e) => {
    //     e.preventDefault();


                // name: name,
                // email: email,
                // message: message
            


    return (
        <div className="landing-form">
            <form  onSubmit={handleSubmit(onSub)}>
                <div className="input-container">
                    <input {...register("Name",{required:true,minLength:2})}
                        type="text" 
                        placeholder="שם מלא" 
                        // value={name}
                        // onChange={e => setName(e.target.value)}
                    />{errors.Name && <div className='text-danger d-block'>שם לא תקין</div>}
                </div>
                <div className="input-container">
                    <input    {...register("email",{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                        type="email" 
                        placeholder="אימייל" 
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                    />
            {errors.email&&<div className='text-danger d-block'>אימייל לא תקין</div>}
                </div>
                <div className="input-container">
                    <textarea {...register("message",{required:true})}
                        placeholder="הודעה" 
                        // value={message}
                        // onChange={e => setMessage(e.target.value)}
                    ></textarea>
                      {errors.message&&<div className='text-danger d-block'>אנא מלא את ההודעה  </div>}

                </div>
                <button type="submit" className="submit-button">שלח</button>
            </form>
        </div>
    );
}

export default LandingForm;
