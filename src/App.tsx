import './App.css';
import icon from './icon.jpg';=

function App() {
return (
    <div className="Portfolio">
    <top>
        <h1>Portfolio</h1>
        <p>Learning data science and programming in university...</p>
        <nav>
        <li><a href="#About">自己紹介</a></li>
        <li><a href="#career">経歴</a></li>
        <li><a href="#skills">スキル</a></li>
        <li><a href="#hack">ハッカソン・コンペティション</a></li>
        <li><a href="#interns">インターンシップ</a></li>
        <li><a href="#links">リンク</a></li>
        </nav>
    </top>

    <main>
        <section id="About">
        <h2>自己紹介</h2>
        <ul>
            <img src={icon} alt="Profile Icon" className="profile-icon" />
            <blockquote>
            <strong>大学にてデータサイエンスの勉強をしながら、時系列データを用いたシステムの作成や研究を行っています。
            <p>ユーザーのQOLを向上させることのできるシステムを開発することが目標です。</p></strong>
            <p>名前:柴田 優太(シバタ ユウタ)</p>
            <p>年齢:20</p>
            <p>所属:武蔵野大学データサイエンス学部データサイエンス学科(28卒)</p>
            </blockquote>
        </ul>
        </section>

        <section id="career">
        <h2>経歴</h2>
        <ul>
            <p>2021/04~2024/03 都立翔陽高校</p>
            <p>2024/04~ 武蔵野大学データサイエンス学部データサイエンス学科</p>
        </ul>
        </section>

        <section id="skills">
        <h2>スキル</h2>
        <ul>
            <li>Python</li>
            <p>基本的なコーディングができる。Streamlitを用いたwebアプリケーションの開発が得意。</p>
            <li>SQL</li>
            <p>基本SQliteを使用(PostgreSQLも使用可能)。基本的なデータベースの操作ができる。</p>
            <li>HTML/CSS</li>
            <p>簡単なwebページをHTMLにて作成可能。CSSは使用可能だがまだ勉強中。</p>
            <li>React</li>
            <p>Webアプリケーションを作成しながら勉強中。</p>
            <li>JavaScript/TypeScript</li>
            <p>Reactに付随して学習中。</p>
        </ul>
        </section>

        <section id="hack">
        <h2>ハッカソン・コンペティション参加経歴</h2>
        <ul>
            <li>SMBC Group GREEN×DATA Challenge 2025</li>
            <p>2025/06/02~06/30に開催。「電力の価格予測にチャレンジしよう！」をテーマに機械学習を用いて電力価格予測を行い、その精度を競うコンペティション。</p>
            <li>MUDS 学内ハッカソン</li>
            <p>2025/07/05に開催。</p>
        </ul>
        </section>

        <section id="interns">
        <h2>インターンシップ経歴</h2>
        <ul>
        </ul>
        </section>

        <section id="links">
        <h2>リンク</h2>
        <ul>
            <li>GMail : y.shibata0820@gmail.com</li>
            <li><a href="https://github.com/Yuu0413" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://note.com/yuu_0413" target="_blank" rel="noopener noreferrer">note</a></li>
            <li><a href="https://qiita.com/yuu_0413" target="_blank" rel="noopener noreferrer">Qiita</a></li>
        </ul>
        </section>

    </main>

    <footer>
        <p>&copy; 2025 Yuta Shibata</p>
    </footer>
    </div>
);
}

export default App;