export default ({ lastUpdate, light }) => {



    console.log("In Clocks Page",lastUpdate)
    return (
      <div className={light ? 'light' : ''}>
        {format(new Date())}
        <style jsx>{`
          div {
            padding: 15px;
            display: inline-block;
            color: #82fa58;
            font: 50px menlo, monaco, monospace;
            background-color: #000;
          }
  
          .light {
            background-color: #999;
          }
        `}</style>
      </div>
    )
  }
  
  const format = t => t.toJSON().slice(11, 19) // cut off except hh:mm:ss