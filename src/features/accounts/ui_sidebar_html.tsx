import { SidebarPage } from '../../shared/html_page'
import script from './ui_sidebar.client.js'
import styles from './ui_sidebar.css'

export function AccountsSidebarHtml() {
	return (
		<SidebarPage styles={styles}>
			<h2>Accounts</h2>
			<div id="content"></div>
			<div class="button-container">
				<button class="add-button" onclick="handleAddAccount()">
					+ Add Account
				</button>
				<button id="delete-button" class="delete-button" onclick="handleDeleteAccount()">
					Delete Account
				</button>
			</div>
			<script>{script}</script>
		</SidebarPage>
	)
}
