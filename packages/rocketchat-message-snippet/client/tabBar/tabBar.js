Meteor.startup(function() {
	Tracker.autorun(function() {
		if (RocketChat.settings.get('Message_AllowSnippeting')) {
			RocketChat.TabBar.addButton({
				groups: ['channel', 'group', 'direct'],
				id: 'Twitter',
				i18nTitle: 'Twitter',
				icon: 'twitter',
				template: 'snippetedMessages',
				order: 3
			});
		} else {
			RocketChat.TabBar.removeButton('snippeted-messages');
		}
	});
});
