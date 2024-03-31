import PropTypes from 'prop-types';

export function Todos({ todos }) {
    return (
        <div>
            {
                todos.map(function(todo) {
                    return (
                        <div key={todo.id}>
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                            <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                        </div>
                    );
                })
            }
        </div>
    );
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired
};


// renderer for backend
// vercel or netlify for frontend 