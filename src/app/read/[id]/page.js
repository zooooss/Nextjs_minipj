export default async function Read(props) {
    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topics = await resp.json();
    return (
        <>
            <h2>{topics.title}</h2>
            {topics.body}
        </>
    );
}
