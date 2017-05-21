FlowRouter.route('/', 
{
    action() 
    {
        Meteor.call('createBoard', (err, boardId) =>
        {
            if (err) alert(err.message);
            else
            {
                FlowRouter.go(`/boards/${boardId}`);
            }
        });
    }
});

FlowRouter.route('/boards/:id', 
{
    action()
    {
        BlazeLayout.render('Board',
        {
            content: 'main'
        })
    }
});