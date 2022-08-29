import { NextPage } from 'next'

// components
import BoxElement from '../src/components/Box'
import BoxBottomLeft from '../src/components/BoxBottomLeft'
import BoxBottomRight from '../src/components/BoxBottomRight'
import BoxTopLeft from '../src/components/BoxTopLeft'
import BoxTopRight from '../src/components/BoxTopRight'

// styleds
import { BaseStyled } from '../src/styles/home'

// class
import { Board } from '../src/module/board'
import { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect(() => {
    new Board().test()
  }, [])

  return (
    <BaseStyled>
      <div className='primary'>
        <section>
          <BoxTopLeft />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='work'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='agricultura'
            icon={"ok"}
            price="$12.120"
            title='Orta seu joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxTopRight />
        </section>
        
        <section>
          <div>Casa 1a</div>
          <div>Casa 2a</div>
          <div>Casa 3a</div>
          <div>Casa 4a</div>
          <div>Casa 5a</div>
          <div>Casa 6a</div>
          <div>Casa 7a</div>
          <div>Casa 8a</div>
          <div>Casa 9a</div>
        </section>
        

        <div className='primary'>
          Banco imobiliário
        </div>
        <section>
          <div>Casa 1b</div>
          <div>Casa 2b</div>
          <div>Casa 3b</div>
          <div>Casa 4b</div>
          <div>Casa 5b</div>
          <div>Casa 6b</div>
          <div>Casa 7b</div>
          <div>Casa 8b</div>
          <div>Casa 9b</div>
        </section>

        <section>
          <BoxBottomLeft/>
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='work'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='agricultura'
            icon={"ok"}
            price="$12.120"
            title='Orta seu joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxBottomRight />
        </section>
      </div>
      <div>
        controllers
        <br />
        <br />
        <ul>
          <li>
            Pedrin
          </li>
          <li>
            carlos
          </li>
          <li>
            leo
          </li>
          <li>
            fabio
          </li>
        </ul>
      </div>
      
      
    </BaseStyled>
  )
}
export default Home