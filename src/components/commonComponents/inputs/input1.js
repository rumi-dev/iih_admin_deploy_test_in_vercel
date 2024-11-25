import React, { useEffect, useState } from 'react'

export const Textarea1 = ({ lable, name, id, required = false, value }) => {
    const [CurrentValue, setCurrentValue] = useState();

    const onchange = (val) => {
        setCurrentValue(val.target.value)
        console.log('val.CurrentValue: ' + val.target.value);
    }
    useEffect(() => {
        setCurrentValue(value)
    }, []);
    return (
        <>
            <div className='mb-2'>
                <label for={id} className="form-label">{lable}</label>
                {/* <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="welcome Note change" /> */}
                <textarea name={name} value={CurrentValue} onChange={onchange} type="text" rows="5" class="form-control" id={id} aria-describedby="Text area" required={required} />
            </div>
        </>
    )
}

export const Input1 = ({ lable, name, id }) => {

    return (
        <>
            <div className='mb-2'>
                <label for={id} class="form-label">{lable}</label>
                {/* <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="welcome Note change" /> */}
                <input name={name} type="text" class="form-control" id={id} aria-describedby="Input field" required />
            </div>
        </>
    )
}
