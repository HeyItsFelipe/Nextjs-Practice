const ToDoListItem = ({ listItem, index, deleteListItem, strikeListItem }) => (
    <div className="column-24 leader-1">
        <div className="column-20">
            <span className="font-size-4" style={{ textDecoration: listItem.completed ? 'line-through' : '' }}>
                {listItem.title}
            </span>
        </div>
        <button className="btn-red btn-grouped" onClick={() => deleteListItem(index)}>
            <span className="font-size-3 icon-ui-close icon-ui-red" aria-label="delete"></span>
        </button>
        <button className="btn-green btn-grouped" onClick={() => strikeListItem(index)}>
            <span className="font-size-3 icon-ui-check-mark icon-ui-gray" aria-label="done"></span>
        </button>
    </div>
);

export default ToDoListItem;