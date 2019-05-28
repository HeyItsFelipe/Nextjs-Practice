const ToDoListItem = ({ listItem }) => (
    <div className="column-6 post-18 leader-1">
        <div className="column-4">
            <span className="font-size-3">{listItem.value}</span>
        </div>
        <span className="font-size-3 icon-ui-close icon-ui-red" aria-label="delete"></span>
        <span className="font-size-3 icon-ui-check-mark icon-ui-green" aria-label="done"></span>
    </div>
);

export default ToDoListItem;