view FormulaPage {
  prop formulas : Object
  prop actions : Object

  const { id } = Motion.router.params
  if (!formulas[id]) {
    actions.getFormula()
  }

  <page class="ui container" if={formulas[id]}>
    <h1>{formulas[id].name}</h1>
    <div class="ui divider"></div>
    <h2 class="formula">{formulas[id].formula}</h2>
    <description>
      <h3>Description</h3>
      <div>{formulas[id].description}</div>
    </description>
    <div class="ui divider"></div>
    <resources>
      <h3>Resources</h3>
      <list class="ui list">
        <a class="item" target="_blank" repeat={formulas[id].resources} href={_.link}>{_.name}</a>
      </list>
    </resources>
    <div class="ui divider"></div>
    <tags>
      <h3>Tags</h3>
      <list class="ui horizontal list">
        <tag class="item" repeat={formulas[id].tags}>{_}</tag>
      </list>
    </tags>
  </page>

  $ = {
    width: '100%',
    paddingTop: 20
  }

  $formula = {
    textAlign: 'center',
  }
}
