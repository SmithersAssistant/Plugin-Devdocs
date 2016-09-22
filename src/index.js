import DevdocsFactory from './Devdocs'
const DEVDOCS_COMPONENT = 'com.robinmalfait.devdocs'

export default robot => {
  const Devdocs = DevdocsFactory(robot);

  robot.registerComponent(Devdocs, DEVDOCS_COMPONENT);

  robot.listen(/^devdocs$/, {
    description: "DevDocs is a fast, offline API documentation browser with 100+ docs including HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++, jQuery, and more.",
    usage: 'devdocs'
  }, () => {
    robot.addCard(DEVDOCS_COMPONENT)
  })

  robot.listen(/^devdocs (.*)$/, {
    description: "DevDocs is a fast, offline API documentation browser with 100+ docs including HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++, jQuery, and more.",
    usage: 'devdocs <query>'
  }, ({matches}) => {
    robot.addCard(DEVDOCS_COMPONENT, {query: matches.query})
  })
}
