document.getElementById("searchBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");
    if (!username) {
        resultDiv.innerHTML = "<P>ユーザー名を入力してください。</p>";
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
    .then(res => {
        if(!res.ok) throw new Error("ユーザーが見つかりませんでした");
        return res.json();
    })
    .then(data => {
        resultDiv.innerHTML = `
        <P><strong>ユーザー名:</strong> ${data.login}</P>
        <P><strong>名前:</strong> ${data.name || "未設定"}</P>
        <P><strong>フォロワー数</strong> ${data.followers}</P>
        <P><strong>公開リポジトリ数</strong> ${data.public_repos}</P>
        <img src="${data.avatar_url}" width="100" alt="アイコン画像"/>
    `;
    })
    .catch(err => {
        resultDiv.innerHTML = `<p style="color:red;">${err.message}</P>`;
    });
});