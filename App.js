const App = () => (
    <div>
        <Hello />
        <Animal name="Henrietta" emoji="chicken" />
        <Animal name="Henry" emoji="cow" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))