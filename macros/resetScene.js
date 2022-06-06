game.actors.forEach(a => {
    a.resetScene();
});
ChatMessage.create({
    content: `<div><h3>Scene Advanced</h3><p>All Scene Effort reclaimed for all actors.</p></div>`,
});
