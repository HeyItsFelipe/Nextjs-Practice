const ToDoListItem = ({ listItem, deleteListItem, index }) => (
    <div className="column-8 post-16 leader-1">
        <div className="column-6">
            <span className="font-size-4">{listItem.value}</span>
        </div>
        <button className="btn-red btn-grouped">
            <span className="font-size-3 icon-ui-close icon-ui-red" aria-label="delete" onClick={() => deleteListItem(index)}></span>
        </button>
        <button className="btn-green btn-grouped">
            <span className="font-size-3 icon-ui-check-mark icon-ui-gray" aria-label="done"></span>
        </button>
    </div>
);

export default ToDoListItem;