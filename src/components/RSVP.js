import {useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function RSVP () {
  const [selected, setSelected] = useState('yes');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    AddTask(data)
    reset();
    navigate("/thank-you");
  };

  const AddTask = async (newUser) => {
    const res = await fetch('http://localhost:5000/users-array', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(newUser)
    })
    await res.json()
  }

  const handleChange = event => {
    setSelected(event.target.value);
  };
  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Đến với chúng mình nha!</span>
            <br />
      
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Tên" type='text' {...register("name", { required: true })} />
                {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                <input placeholder="Đi cùng file đính kèm VD: người yêu"  type='text' {...register("guests", { required: true })} />
                {errors.guests && <span style={{ color: 'red' }}>This field is required</span>}

                <div style={{ display: 'flex', alignItems: 'center', margin: '25px 5px'}}>
                    <div style={{width: '50%'}}>
                        <input
                            type="radio"
                            id="yes"
                            name="choose"
                            value="yes"
                            {...register("accepted")}
                            checked={selected === 'yes'}
                            onChange={handleChange}
                        />
                        <label htmlFor="yes">Mình sẽ tới nha</label>
                    </div>
                    <div style={{width: '50%'}}>
                        <input
                            type="radio"
                            id="no"
                            name="choose"
                            value="no"
                            {...register("accepted")}
                            onChange={handleChange}
                            checked={selected === 'no'}
                        />
                    <label htmlFor="no">Mình không tới được</label>
                    </div>
                </div>
                
                <input type='submit' className='btn buttono' value='SEND' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
