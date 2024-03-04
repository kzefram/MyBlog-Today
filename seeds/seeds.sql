INSTER INTO users (name, email, password) 
VALUES 
    ('John Doe', 'johndoe@somthing.com', '1234'),
    ('Jane Dane', 'janedane@somthing.com', '1234'),
    ('Anja', 'anja@something.com', '1234'),
    ('John Row', 'johnrow@something,com', '1234');

INSERT INTO posts (title, content, user_id, category, date_created)
VALUES 
    ('How to make a website', 'This is how you make a website', 1, 'web development', '2021-01-01'),
    ('How to make a blog', 'This is how you make a blog', 2, 'web development', '2021-01-02'),
    ('How to make a game', 'This is how you make a game', 3, 'game development', '2021-01-03'),
    ('How to make a mobile app', 'This is how you make a mobile app', 4, 'mobile development', '2021-01-04');

INSERT INTO comments (content, user_id, post_id, date_created)
VALUES 
    ('This is a great post', 1, 1, '2021-01-01'),
    ('This is a great post', 2, 2, '2021-01-02'),
    ('This is a great post', 3, 3, '2021-01-03'),
    ('This is a great post', 4, 4, '2021-01-04');

    