import { ConfigProvider, Layout, Menu } from 'antd';
import Contato from './components/contato';
import SobreMim from './components/sobreMim';

const { Header, Content, Footer } = Layout;

const config = {
	colorPrimary: '#F0396A',
	colorTextBase: '#ADA4A6',
	colorTextHeading: '#fd92aecd',
	fontSizeHeading1: '70px',
	fontSizeHeading2: '40px',
	fontSizeHeading3: '100px',
	fontFamily: 'Raleway',
	fontSize: '20px',
	colorLink: '#EB91A9',
	colorLinkHover: '#FFD8E2',
};

function App() {
	return (
		<ConfigProvider
			theme={{
				token: { ...config },
			}}>
			<Layout>
				<Header
					style={{
						position: 'sticky',
						top: 0,
						zIndex: 1,
						width: '100%',
						background: '#0B0003',
					}}>
					<div
						style={{
							float: 'left',
							width: 120,
							height: 31,
							margin: '16px 24px 16px 0',
							background: 'rgba(255, 255, 255, 0.2)',
						}}
					/>
					<Menu
						theme='dark'
						mode='horizontal'
						defaultSelectedKeys={['2']}
						style={{ background: '#0B0003', color: '#ADA4A6' }}>
						<Menu.Item key='1'>Projetos</Menu.Item>
						<Menu.Item key='2'>Formação</Menu.Item>
						<Menu.Item key='3'>Contato</Menu.Item>
					</Menu>
				</Header>
				<Content
					className='site-layout'
					style={{
						width: '100%',
					}}>
					<div
						style={{
							minHeight: 380,
							background: '#201d1e',
						}}>
						<SobreMim />
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
						background: 'black',
					}}>
					<Contato />
				</Footer>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
