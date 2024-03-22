document.addEventListener('DOMContentLoaded', function() {

    // Check token at start if user is logged in
    const token = sessionStorage.getItem('token');
    if (!token) {
        // No token found, redirect to login page
        window.location.href = '/';
        // Stop executing script
        return;
    }

    // Handle click on logout button
    const logoutButton = document.getElementById('log-out');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {

            // Proceed with logout after a short delay
            setTimeout(() => {
                fetch('/api/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
                    displayStatusMessage('Logging out...', true);
                    // Remove token from sessionStorage
                    sessionStorage.removeItem('token');
                    // Redirect to home page
                    window.location.href = '/';
                })
                .catch(error => {
                    console.error('Logout Error:', error);
                });
            }, 300); // allow to read status message
        });
    }
    // function to clear note content
    const clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', function() {
        // Clears content of main Quill editor
        quill.setContents([]);
    });
    // Save Note button event listener
    const saveNoteButton = document.getElementById('save-note');
    saveNoteButton.addEventListener('click', function() {
        const urlParamsSave = new URLSearchParams(window.location.search);
        const noteIdSave = urlParamsSave.get('noteId');
        // Get edited title from content editable element
        const editedTitle = document.getElementById('editable-note-title').innerText;
        // Get HTML content from Quill editor
        const noteContentSave = quill.root.innerHTML;
        // Get HTML content from Quill ai-features-editor
        const aiFeaturesContentSave = quillAIFeatures.root.innerHTML;
        console.log(noteIdSave, editedTitle, noteContentSave, aiFeaturesContentSave)
        // function to save note title and content, save ai feature content
        saveNoteAndAIFeatures(noteIdSave, editedTitle, noteContentSave, aiFeaturesContentSave).then(() => {
            displayStatusMessage('Note saved successfully.', true);
            setTimeout(() => {
                // Redirect after displaying message
                window.location.href = '/dashboard';
            }, 1000); // Adjust time
        }).catch(() => {
            displayStatusMessage('Failed to save note.', false);
        });
    });
     // function to delete note
     const deleteBtn = document.getElementById('delete-btn');
     if (deleteBtn) {
         deleteBtn.addEventListener('click', function() {
             // get the noteId from the URL parameters
             const noteId = urlParams.get('noteId');
 
             if (confirm('Are you sure you want to delete this note?')) {
                 fetch(`/api/notes/${noteId}`, {
                     method: 'DELETE',
                     headers: {
                         'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                         'Content-Type': 'application/json'
                     }
                 })
                 .then(response => {
                     if (!response.ok) {
                         throw new Error('Failed to delete the note.');
                     }
                     return response.json();
                 })
                 .then(() => {
                     displayStatusMessage('Note deleted successfully and navigating to dashboard...', true);
                     setTimeout(() => {
                         // Redirect after displaying message
                         window.location.href = '/dashboard';
                     }, 500); // Adjust time
                     // alert('Note deleted successfully.');
                     window.location.href = '/dashboard'; // Redirect to dashboard after successful deletion
                 })
                 .catch(error => {
                     console.error('Error deleting the note:', error);
                     alert('Failed to delete the note.');
                 });
             }
         });
     }
 
     // function to handle expired token response
     function handleResponse(response) {
         if (!response.ok && response.status === 401) {
             // Token expired or unauthorized
             alert('Session expired. Please login again.');
             // Clear the expired token
             sessionStorage.removeItem('token');
             // Redirect to login page
             window.location.href = '/';
             return Promise.reject('Session expired');
         }
         return response.json();
     }
 });