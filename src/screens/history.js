import React , {useContext, useEffect, useState }from 'react'
import {AuthUserCtx} from '../context/auth'  
import {Container, ListGroup} from 'react-bootstrap'
import axios from 'axios'


export const History = () => {
    const {authUser} = useContext(AuthUserCtx)
    const {history, setHistory} = useState([])
    useEffect(()=>{
        axios.get(`http://localhost/game/history/${authUser._id}`, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((res)=>{
            console.log(res)
        })
    }, [])
    return (
                <Container className="mt-5">
                <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    </ListGroup>
                </Container>
    )
}
