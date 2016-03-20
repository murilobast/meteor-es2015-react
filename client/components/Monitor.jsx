import React from 'react';

// Creating project page component
export default class Monitor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			total: {},
			cores: [],
			mem: {
				free: {
					gbs: 0,
					percent: 0
				},
				total: {
					gbs: 0,
					percent: 0
				},
				used: {
					gbs: 0,
					percent: 0
				}
			}
		}
	}

	componentDidMount() {
		Streamy.on(this.props.id, (data) => {
			this.setState({cores: data.data.cores});
			this.setState({total: data.data.total});
			this.setState({mem: data.data.mem});
		});
	}

	render() {
		let cores = this.state.cores;
		let total = this.state.total;
		let mem = this.state.mem;

		return (
			<div id="monitoring">
				<div className="row">
					<div className="col s12 m4">
						<ul className="collection">
							<li className="collection-item"><b>Cpu usage</b></li>
							<li className="collection-item">
								<p className="left">User</p>
								<p className="right">{total.user}%</p>
								<div className="progress">
									<div className="determinate" style={{'width': total.user + '%'}}></div>
								</div>
							</li>
							<li className="collection-item">
								<p className="left">System</p>
								<p className="right">{total.sys}%</p>
								<div className="progress">
									<div className="determinate" style={{'width': total.sys + '%'}}></div>
								</div>
							</li>
							<li className="collection-item">
								<p className="left">Total</p>
								<p className="right">{total.cpu}%</p>
								<div className="progress">
									<div className="determinate" style={{'width': total.cpu + '%'}}></div>
								</div>
							</li>
							<li className="collection-item">
								<p className="left">Idle</p>
								<p className="right">{total.idle}%</p>
								<div className="progress">
									<div className="determinate" style={{'width': total.idle + '%'}}></div>
								</div>
							</li>
						</ul>
					</div>
					<div className="col s12 m8">
						{cores.map((cpu) => (
							<div className="col s6 l3" key={cpu.name}>
								<ul className="collection cores">
									<li className="collection-item"><b>{cpu.name}</b></li>
									<li className="collection-item">
										<p className="left">User</p>
										<p className="right">{cpu.user}%</p>
										<div className="progress">
											<div className="determinate" style={{'width': cpu.user + '%'}}></div>
										</div>
									</li>
									<li className="collection-item">
										<p className="left">System</p>
										<p className="right">{cpu.sys}%</p>
										<div className="progress">
											<div className="determinate" style={{'width': cpu.sys + '%'}}></div>
										</div>
									</li>
									<li className="collection-item">
										<p className="left">Idle</p>
										<p className="right">{cpu.idle}%</p>
										<div className="progress">
											<div className="determinate" style={{'width': cpu.idle + '%'}}></div>
										</div>
									</li>
								</ul>
							</div>
						))}
					</div>
					<div className="col s12">
						<ul className="collection">
							<li className="collection-item"><b>Ram usage</b></li>
							<li className="collection-item">
								<p className="left">Free</p>
								<p className="right">{mem.free.gbs}GB</p>
								<div className="progress">
									<div className="determinate" style={{'width': mem.free.percent + '%'}}></div>
								</div>
							</li>
							<li className="collection-item">
								<p className="left">Used</p>
								<p className="right">{mem.used.gbs}GB</p>
								<div className="progress">
									<div className="determinate" style={{'width': mem.used.percent + '%'}}></div>
								</div>
							</li>
							<li className="collection-item">
								<p className="left">Total</p>
								<p className="right">{mem.total.gbs}GB</p>
								<div className="progress">
									<div className="determinate" style={{'width': mem.total.percent + '%'}}></div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
};