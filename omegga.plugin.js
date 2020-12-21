const {chat: { sanitize, parseLinks }} = OMEGGA_UTIL;

module.exports = class RoleChat {
  constructor(omegga, config) {
    this.omegga = omegga;
    this.config = config;
  }

  async init() {
    const command = this.config.command || 'rc';

    Omegga.on('cmd:' + command, (name, ...args) => {
      const player = Omegga.getPlayer(name);
      const canChat = p => p.isHost() || p.getRoles().includes(this.config.role);
      if (!canChat(player)) return;

      // player name color
      const color = player.getNameColor();

      // sanitized message
      const sanitized = parseLinks(sanitize(args.join(' ')));

      // whisper to all players with the role
      for (const p of Omegga.players) {
        if (canChat(p)) {
          Omegga.whisper(p, `"${
            this.config.prefix || '*'
          } <b><color=\\"${color}\\">${player.name}</></>: ${sanitized}"`);
        }
      }
    });
  }

  async stop() {}
};