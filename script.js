const noteInput = document.getElementById('note-input');
const addNoteButton = document.getElementById('add-note');
const notesList = document.getElementById('notes');

let notes = [];

// Загрузить заметки из IndexedDB
loadNotesFromIndexedDB();

// Добавить новую заметку
addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (noteText) {
        addNote(noteText);
        saveNotesToIndexedDB();
    }
});

// Удалить заметку
notesList.addEventListener('click', (event) => {
    const noteId = event.target.dataset.noteId;
    if (noteId) {
        deleteNote(noteId);
        saveNotesToIndexedDB();
    }
});

// Функция добавления заметки
function addNote(noteText) {
    const newNote = {
        id: Date.now(),
        text: noteText
    };
    notes.push(newNote);
    renderNotes();
    noteInput.value = '';
}

// Функция удаления заметки
function deleteNote(noteId) {
    notes = notes.filter(note => note.id !== noteId);
    renderNotes();
}

// Функция отображения заметок
function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.textContent = note.text;
        listItem.dataset.noteId = note.id;
        notesList.appendChild(listItem);
    });
}

// Функция сохранения заметок в IndexedDB
function saveNotesToIndexedDB() {
    // ... Реализация сохранения заметок в IndexedDB
}

// Функция загрузки заметок из IndexedDB
function loadNotesFromIndexedDB() {
    // ... Реализация загрузки заметок из IndexedDB
}
