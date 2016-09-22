import styles from './styles'

export default robot => {
  const { enhance, restorableComponent, withStyles } = robot
  const { React } = robot.dependencies
  const { Full } = robot.cards
  const { Webview } = robot.UI

  const Devdocs = React.createClass({
    getInitialState() {
      if (this.props.query === undefined) {
        return {
          url: 'http://devdocs.io/',
          newUrl: 'http://devdocs.io/'
        }
      }

      return {
        url: `http://devdocs.io/#q=${this.props.query}`,
        newUrl: `http://devdocs.io/#q=${this.props.query}`
      }
    },
    componentDidMount () {
      this.setState({ url: this.state.newUrl })
    },
    render() {
      const { url } = this.state;
      const { query, styles, ...other } = this.props

      return (
        <Full
          title="Devdocs"
          {...other}
        >
          <Webview
            src={url}
            className={styles.devdocs}
            onDidNavigateInPage={({ url }) => this.setState({ newUrl: url })}
          />
        </Full>
      )
    }
  })

  return enhance(Devdocs, [
    restorableComponent,
    withStyles(styles)
  ])
}
