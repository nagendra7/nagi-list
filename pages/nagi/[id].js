export const getStaticPaths = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json();

const paths = data.map(nagi => {
    return{
        params : {id : nagi.id.toString()}
    }
})
    return {
        paths:paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
const id = context.params.id;

const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
const data = await res.json();

    return {
        props:{
            nag:data
        }
    }
}

const Details = ({nag}) => {
    return (  
        <div>
        <h1>{nag.name}</h1>
        
        <p>{nag.email}</p>
        <p>{nag.address.city}</p>
        </div>
    );
}
 
export default Details;