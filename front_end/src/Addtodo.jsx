import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';

function Addtodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}> 
            <Card variant="outlined" style={{
                width: "340px",
                height: "400px",
                display: 'flex',
                justifyContent: 'center',
                marginTop: "100px"
            }}>
                <div style={{
                    marginTop: "80px"
                }}>
                    <TextField 
                    id="standard-basic" 
                    label="Title" 
                    variant="standard"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }} 
                    />
                    <br /><br />
                    <TextField 
                    id="standard-basic" 
                    label="Description" 
                    variant="standard"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }} 
                    />
                    <br /><br />
                    <Button 
                    variant="contained"
                    onClick={() => {
                        fetch('http://127.0.0.1:3002/todos', {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    }}
                    >Add Todo</Button>
                </div>
            </Card>
        </div>
    )
}

export default Addtodo;