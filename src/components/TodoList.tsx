import ListItem from "./ListItem";


const TodoList = () => {
    return (
        <>
            <ul id="myUL">
            <ListItem task="Hit the gym" />
            <ListItem task="Pay bills" />
            <ListItem task="meet Ahmad" />
            <ListItem  task="Buy eggs" />
            <ListItem  task="read a book" />
            <ListItem  task="Organize Office" />
            
            </ul>
                
        </>
    );
}
export default TodoList;