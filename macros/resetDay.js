game.actors.forEach(a => {
    a.resetDay();
});
ChatMessage.create({
    content: `<div><h3>Day Advanced</h3><p>All Day and Scene Effort reclaimed and all artifacts unbound for all actors.</p></div>`,
});
