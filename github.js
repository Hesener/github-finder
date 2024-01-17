class Github {
    constructor(){
        this.client_id = 'fb459a9512569d925351';
        this.client_secret = '025b9194c99cc62dfe3946dad1d9bd0537415db4';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}$client_id=${this.client_id}&client_secret=${this.client_secret}`);                 
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}