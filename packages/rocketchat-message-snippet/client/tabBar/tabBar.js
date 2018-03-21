Meteor.startup(function() {
	Tracker.autorun(function() {
		if (RocketChat.settings.get('Message_AllowSnippeting')) {
			RocketChat.TabBar.addButton({
				groups: ['channel', 'group', 'direct'],
				id: 'Tweets',
				i18nTitle: 'Tweets',
				icon: 'twitter',
				template: 'snippetedMessages',
				order: 20
			});
		} else {
			RocketChat.TabBar.removeButton('snippeted-messages');
		}
	});
});
