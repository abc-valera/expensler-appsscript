function renderAccounts(accounts) {
	var contentDiv = document.getElementById('content');
	var deleteButton = document.getElementById('delete-button');

	if (accounts.length === 0) {
		contentDiv.innerHTML = '<div class="empty-state">No accounts configured yet.</div>';
		deleteButton.disabled = true;
	} else {
		var accountsHtml = accounts.map(function(account) {
			var statusClass = account.isValid ? 'status-enabled' : 'status-disabled';
			var statusText = account.isValid ? 'Enabled' : 'Disabled';
			var addedDate = new Date(account.addedAt).toLocaleDateString();

			return '<div class="account-item">'
				+ '<div class="account-header">'
				+ '<span class="account-name">' + account.uniqueName + '</span>'
				+ '<span class="status ' + statusClass + '">' + statusText + '</span>'
				+ '</div>'
				+ '<div class="account-detail">'
				+ '<strong>Bank:</strong> ' + (account.details && account.details.provider ? account.details.provider : '') + '<br>'
				+ '<strong>Currency:</strong> ' + account.currency + '<br>'
				+ '<strong>Added:</strong> ' + addedDate
				+ '</div>'
				+ '</div>';
		}).join('');

		contentDiv.innerHTML = '<div class="account-list">' + accountsHtml + '</div>';
		deleteButton.disabled = false;
	}
}

function handleAddAccount() {
	google.script.run
		.withSuccessHandler(function() {
			google.script.run.withSuccessHandler(renderAccounts).getAccountsData();
		})
		.addAccountDialog();
}

function handleDeleteAccount() {
	google.script.run
		.withSuccessHandler(function() {
			google.script.run.withSuccessHandler(renderAccounts).getAccountsData();
		})
		.deleteAccountDialog();
}

google.script.run.withSuccessHandler(renderAccounts).getAccountsData();
