export type Locale = "zh" | "en";

export type TranslationKey =
  // Navigation groups
  | "nav.group.chat"
  | "nav.group.control"
  | "nav.group.agent"
  | "nav.group.settings"
  // Tab titles
  | "tab.overview.title"
  | "tab.channels.title"
  | "tab.instances.title"
  | "tab.sessions.title"
  | "tab.cron.title"
  | "tab.skills.title"
  | "tab.nodes.title"
  | "tab.chat.title"
  | "tab.config.title"
  | "tab.debug.title"
  | "tab.logs.title"
  // Tab subtitles
  | "tab.overview.subtitle"
  | "tab.channels.subtitle"
  | "tab.instances.subtitle"
  | "tab.sessions.subtitle"
  | "tab.cron.subtitle"
  | "tab.skills.subtitle"
  | "tab.nodes.subtitle"
  | "tab.chat.subtitle"
  | "tab.config.subtitle"
  | "tab.debug.subtitle"
  | "tab.logs.subtitle"
  // Brand
  | "brand.subtitle"
  // Status
  | "status.health"
  | "status.ok"
  | "status.offline"
  // Resources
  | "nav.resources"
  | "nav.docs"
  | "nav.docs.tooltip"
  // Common
  | "common.loading"
  | "common.refresh"
  | "common.saving"
  | "common.save"
  | "common.cancel"
  | "common.delete"
  | "common.connect"
  | "common.disconnect"
  | "common.close"
  | "common.open"
  | "common.edit"
  | "common.add"
  | "common.remove"
  | "common.enable"
  | "common.disable"
  | "common.enabled"
  | "common.disabled"
  | "common.yes"
  | "common.no"
  | "common.ok"
  | "common.error"
  | "common.success"
  | "common.warning"
  | "common.info"
  // Sidebar
  | "sidebar.expand"
  | "sidebar.collapse"
  // Overview
  | "overview.title"
  | "overview.subtitle"
  | "overview.connect.button"
  | "overview.refresh.button"
  | "overview.uptime"
  | "overview.tick"
  | "overview.presence.count"
  | "overview.sessions.count"
  | "overview.cron.enabled"
  | "overview.cron.disabled"
  | "overview.cron.next"
  | "overview.channels.lastRefresh"
  | "overview.auth.hint.noAuth"
  | "overview.auth.hint.failed"
  | "overview.auth.hint.docs"
  | "overview.insecure.hint"
  | "overview.insecure.allowInsecure"
  | "overview.insecure.docs"
  | "overview.gatewayUrl.label"
  | "overview.token.label"
  | "overview.password.label"
  | "overview.sessionKey.label"
  // Chat
  | "chat.send"
  | "chat.abort"
  | "chat.placeholder"
  | "chat.refresh"
  | "chat.compacting"
  | "chat.compacted"
  | "chat.thinking.toggle"
  | "chat.focus.toggle"
  | "chat.focus.toggle.disabled"
  | "chat.thinking.toggle.disabled"
  | "chat.refresh.tooltip"
  | "chat.disconnected"
  | "chat.empty"
  | "chat.queue.title"
  | "chat.queue.empty"
  | "chat.queue.remove"
  | "chat.queue.clear"
  | "chat.newSession"
  // Channels
  | "channels.refresh"
  | "channels.loading"
  | "channels.error"
  | "channels.lastRefresh"
  | "channels.status.connected"
  | "channels.status.disconnected"
  | "channels.status.error"
  // Instances
  | "instances.title"
  | "instances.subtitle"
  | "instances.loading"
  | "instances.empty"
  | "instances.refresh"
  // Sessions
  | "sessions.title"
  | "sessions.subtitle"
  | "sessions.loading"
  | "sessions.empty"
  | "sessions.refresh"
  | "sessions.filter.active"
  | "sessions.filter.limit"
  | "sessions.filter.includeGlobal"
  | "sessions.filter.includeUnknown"
  | "sessions.delete"
  | "sessions.patch"
  // Cron
  | "cron.title"
  | "cron.subtitle"
  | "cron.loading"
  | "cron.refresh"
  | "cron.add"
  | "cron.remove"
  | "cron.run"
  | "cron.toggle"
  | "cron.enabled"
  | "cron.disabled"
  | "cron.runs"
  | "cron.runs.empty"
  | "cron.form.schedule"
  | "cron.form.sessionKey"
  | "cron.form.message"
  // Skills
  | "skills.title"
  | "skills.subtitle"
  | "skills.loading"
  | "skills.refresh"
  | "skills.filter"
  | "skills.install"
  | "skills.update"
  | "skills.enable"
  | "skills.disable"
  | "skills.apiKey"
  | "skills.apiKey.save"
  | "skills.apiKey.placeholder"
  // Nodes
  | "nodes.title"
  | "nodes.subtitle"
  | "nodes.loading"
  | "nodes.refresh"
  | "nodes.devices.refresh"
  | "nodes.devices.title"
  | "nodes.devices.empty"
  | "nodes.device.approve"
  | "nodes.device.reject"
  | "nodes.device.revoke"
  | "nodes.device.rotate"
  // Config
  | "config.title"
  | "config.subtitle"
  | "config.loading"
  | "config.save"
  | "config.apply"
  | "config.reload"
  | "config.mode.form"
  | "config.mode.raw"
  | "config.valid"
  | "config.invalid"
  | "config.saving"
  | "config.applying"
  | "config.search"
  // Debug
  | "debug.title"
  | "debug.subtitle"
  | "debug.loading"
  | "debug.refresh"
  | "debug.call.method"
  | "debug.call.params"
  | "debug.call.execute"
  | "debug.call.result"
  | "debug.call.error"
  // Logs
  | "logs.title"
  | "logs.subtitle"
  | "logs.loading"
  | "logs.refresh"
  | "logs.filter"
  | "logs.autoFollow"
  | "logs.truncated"
  | "logs.empty"
  | "logs.lastUpdated"
  // Exec approval
  | "execApproval.title"
  | "execApproval.allowOnce"
  | "execApproval.allowAlways"
  | "execApproval.deny"
  | "execApproval.request"
  // Theme
  | "theme.system"
  | "theme.light"
  | "theme.dark"
  // Locale
  | "locale.zh"
  | "locale.en"
  // Overview additional
  | "overview.gatewayAccess.title"
  | "overview.gatewayAccess.subtitle"
  | "overview.snapshot.title"
  | "overview.snapshot.subtitle"
  | "overview.snapshot.status"
  | "overview.snapshot.hint"
  | "overview.notes.title"
  | "overview.notes.subtitle"
  | "overview.notes.tailscale.title"
  | "overview.notes.tailscale.desc"
  | "overview.notes.hygiene.title"
  | "overview.notes.hygiene.desc"
  | "overview.notes.cron.title"
  | "overview.notes.cron.desc"
  // Instances additional
  | "instances.card.title"
  | "instances.card.subtitle"
  | "instances.unknownHost"
  | "instances.lastInput"
  | "instances.reason"
  | "instances.scopes"
  // Sessions additional
  | "sessions.store"
  | "sessions.table.key"
  | "sessions.table.label"
  | "sessions.table.kind"
  | "sessions.table.updated"
  | "sessions.table.tokens"
  | "sessions.table.thinking"
  | "sessions.table.verbose"
  | "sessions.table.reasoning"
  | "sessions.table.actions"
  | "sessions.optional"
  | "sessions.inherit"
  // Cron additional
  | "cron.scheduler.title"
  | "cron.scheduler.subtitle"
  | "cron.scheduler.nextWake"
  | "cron.scheduler.jobs"
  | "cron.newJob.title"
  | "cron.newJob.subtitle"
  | "cron.form.name"
  | "cron.form.description"
  | "cron.form.agentId"
  | "cron.form.wakeMode"
  | "cron.form.payload"
  | "cron.form.systemText"
  | "cron.form.agentMessage"
  | "cron.form.deliver"
  | "cron.form.channel"
  | "cron.jobs.title"
  | "cron.jobs.subtitle"
  | "cron.runs.title"
  | "cron.runs.subtitle"
  | "cron.runs.selectJob"
  // Logs additional
  | "logs.search.placeholder"
  // Debug additional
  | "debug.noIssues"
  // Chat additional
  | "chat.history.truncated"
  | "chat.attachment.preview"
  | "chat.attachment.remove"
  | "chat.focus.exit"
  | "chat.queue.removeItem"
  // Channels additional
  | "channels.health.title"
  | "channels.health.subtitle"
  | "channels.health.noSnapshot"
  | "channels.status.configured"
  | "channels.status.linked"
  | "channels.status.running"
  | "channels.status.mode"
  | "channels.status.lastConnect"
  | "channels.status.lastMessage"
  | "channels.status.authAge"
  | "channels.status.lastStart"
  | "channels.status.lastProbe"
  | "channels.status.lastInbound"
  | "channels.status.credential"
  | "channels.status.audience"
  | "channels.whatsapp.subtitle"
  | "channels.whatsapp.showQr"
  | "channels.whatsapp.working"
  | "channels.whatsapp.relink"
  | "channels.whatsapp.waitScan"
  | "channels.whatsapp.logout"
  | "channels.whatsapp.qrAlt"
  | "channels.telegram.subtitle"
  | "channels.telegram.blurb"
  | "channels.telegram.probe"
  | "channels.telegram.probeOk"
  | "channels.telegram.probeFailed"
  | "channels.telegram.field.accounts"
  | "channels.telegram.field.actions"
  | "channels.telegram.field.deleteMessage"
  | "channels.telegram.field.reactions"
  | "channels.telegram.field.sendMessage"
  | "channels.telegram.field.sticker"
  | "channels.telegram.field.allowFrom"
  | "channels.telegram.field.groupPolicy"
  | "channels.telegram.field.dmPolicy"
  | "channels.telegram.field.groupAllowFrom"
  | "channels.telegram.field.groups"
  | "channels.telegram.field.enabled"
  | "channels.telegram.field.botToken"
  | "channels.telegram.field.requireMention"
  | "channels.telegram.field.customCommands"
  | "channels.telegram.field.streamMode"
  | "channels.telegram.field.draftChunk"
  | "channels.telegram.field.retry"
  | "channels.telegram.field.network"
  | "channels.telegram.field.timeoutSeconds"
  | "channels.telegram.field.capabilities"
  | "channels.telegram.field.inlineButtons"
  | "channels.telegram.field.blockStreaming"
  | "channels.telegram.field.blockStreamingCoalesce"
  | "channels.telegram.field.idleMs"
  | "channels.telegram.field.maxChars"
  | "channels.telegram.field.minChars"
  | "channels.telegram.field.chunkMode"
  | "channels.telegram.field.length"
  | "channels.telegram.field.newline"
  | "channels.telegram.field.commands"
  | "channels.telegram.field.native"
  | "channels.telegram.field.nativeSkills"
  | "channels.telegram.field.configWrites"
  | "channels.telegram.field.dmHistoryLimit"
  | "channels.telegram.field.dms"
  | "channels.telegram.field.replyToMode"
  | "channels.telegram.field.off"
  | "channels.telegram.field.first"
  | "channels.telegram.field.all"
  | "channels.telegram.field.attempts"
  | "channels.telegram.field.jitter"
  | "channels.telegram.field.maxDelayMs"
  | "channels.telegram.field.minDelayMs"
  | "channels.telegram.field.breakPreference"
  | "channels.telegram.field.paragraph"
  | "channels.telegram.field.sentence"
  | "channels.telegram.field.partial"
  | "channels.telegram.field.block"
  | "channels.telegram.field.reactionNotifications"
  | "channels.telegram.field.own"
  | "channels.telegram.field.textChunkLimit"
  | "channels.telegram.field.tokenFile"
  | "channels.telegram.field.webhookPath"
  | "channels.telegram.field.webhookSecret"
  | "channels.telegram.field.webhookUrl"
  | "channels.telegram.field.useIndicator"
  | "channels.telegram.field.historyLimit"
  | "channels.telegram.field.linkPreview"
  | "channels.telegram.field.markdown"
  | "channels.telegram.field.tables"
  | "channels.telegram.field.mediaMaxMb"
  | "channels.telegram.field.bullets"
  | "channels.telegram.field.code"
  | "channels.telegram.field.pairing"
  | "channels.telegram.field.allowlist"
  | "channels.telegram.field.open"
  | "channels.telegram.field.disabled"
  | "channels.telegram.field.ack"
  | "channels.telegram.field.minimal"
  | "channels.telegram.field.extensive"
  | "channels.telegram.field.draftChunk.minChars"
  | "channels.telegram.field.draftChunk.maxChars"
  | "channels.telegram.field.draftChunk.breakPreference"
  | "channels.telegram.field.retry.attempts"
  | "channels.telegram.field.retry.minDelayMs"
  | "channels.telegram.field.retry.maxDelayMs"
  | "channels.telegram.field.retry.jitter"
  | "channels.telegram.field.network.autoSelectFamily"
  | "channels.telegram.field.capabilities.inlineButtons"
  | "config.field.update.checkOnStart"
  | "config.field.diagnostics.cacheTrace"
  | "config.field.diagnostics.cacheTrace.enabled"
  | "config.field.diagnostics.cacheTrace.filePath"
  | "config.field.diagnostics.cacheTrace.includeMessages"
  | "config.field.diagnostics.cacheTrace.includePrompt"
  | "config.field.diagnostics.cacheTrace.includeSystem"
  | "config.field.meta.lastTouchedVersion"
  | "config.field.meta.lastTouchedAt"
  | "config.field.update.channel"
  | "config.field.diagnostics.enabled"
  | "config.field.diagnostics.flags"
  | "config.field.diagnostics.otel.enabled"
  | "config.field.diagnostics.otel.endpoint"
  | "config.field.diagnostics.otel.protocol"
  | "config.field.diagnostics.otel.headers"
  | "config.field.diagnostics.otel.serviceName"
  | "config.field.diagnostics.otel.traces"
  | "config.field.diagnostics.otel.metrics"
  | "config.field.diagnostics.otel.logs"
  | "config.field.diagnostics.otel.sampleRate"
  | "config.field.diagnostics.otel.flushIntervalMs"
  | "config.field.gateway.remote.url"
  | "config.field.gateway.remote.sshTarget"
  | "config.field.gateway.remote.sshIdentity"
  | "config.field.gateway.remote.token"
  | "config.field.gateway.remote.password"
  | "config.field.gateway.remote.tlsFingerprint"
  | "config.field.gateway.auth.token"
  | "config.field.gateway.auth.password"
  | "config.field.gateway.controlUi.basePath"
  | "config.field.gateway.controlUi.allowInsecureAuth"
  | "config.field.gateway.controlUi.dangerouslyDisableDeviceAuth"
  | "config.field.gateway.http.endpoints.chatCompletions.enabled"
  | "config.field.gateway.reload.mode"
  | "config.field.gateway.reload.debounceMs"
  | "config.field.gateway.nodes.browser.mode"
  | "config.field.gateway.nodes.browser.node"
  | "config.field.gateway.nodes.allowCommands"
  | "config.field.gateway.nodes.denyCommands"
  | "config.field.tools.media.image.enabled"
  | "config.field.tools.media.image.maxBytes"
  | "config.field.tools.media.image.maxChars"
  | "config.field.tools.media.image.prompt"
  | "config.field.tools.media.image.timeoutSeconds"
  | "config.field.tools.media.image.attachments"
  | "config.field.tools.media.image.models"
  | "config.field.tools.media.image.scope"
  | "config.field.tools.media.models"
  | "config.field.tools.media.concurrency"
  | "config.field.tools.media.audio.enabled"
  | "config.field.tools.media.audio.maxBytes"
  | "config.field.tools.media.audio.maxChars"
  | "config.field.tools.media.audio.prompt"
  | "config.field.tools.media.audio.timeoutSeconds"
  | "config.field.tools.media.audio.language"
  | "config.field.tools.media.audio.attachments"
  | "config.field.tools.media.audio.models"
  | "config.field.tools.media.audio.scope"
  | "config.field.tools.media.video.enabled"
  | "config.field.tools.media.video.maxBytes"
  | "config.field.tools.media.video.maxChars"
  | "config.field.tools.media.video.prompt"
  | "config.field.tools.media.video.timeoutSeconds"
  | "config.field.tools.media.video.attachments"
  | "config.field.tools.media.video.models"
  | "config.field.tools.media.video.scope"
  | "config.field.tools.links.enabled"
  | "config.field.tools.links.maxLinks"
  | "config.field.tools.links.timeoutSeconds"
  | "config.field.tools.links.models"
  | "config.field.tools.links.scope"
  | "config.field.tools.profile"
  | "config.field.tools.alsoAllow"
  | "config.field.tools.byProvider"
  | "config.field.tools.exec.applyPatch.enabled"
  | "config.field.tools.exec.applyPatch.allowModels"
  | "config.field.tools.exec.notifyOnExit"
  | "config.field.tools.exec.approvalRunningNoticeMs"
  | "config.field.tools.exec.host"
  | "config.field.tools.exec.security"
  | "config.field.tools.exec.ask"
  | "config.field.tools.exec.node"
  | "config.field.tools.exec.pathPrepend"
  | "config.field.tools.exec.safeBins"
  | "config.field.tools.message.allowCrossContextSend"
  | "config.field.tools.message.crossContext.allowWithinProvider"
  | "config.field.tools.message.crossContext.allowAcrossProviders"
  | "config.field.tools.message.crossContext.marker.enabled"
  | "config.field.tools.message.crossContext.marker.prefix"
  | "config.field.tools.message.crossContext.marker.suffix"
  | "config.field.tools.message.broadcast.enabled"
  | "config.field.tools.web.search.enabled"
  | "config.field.tools.web.search.provider"
  | "config.field.tools.web.search.apiKey"
  | "config.field.tools.web.search.maxResults"
  | "config.field.tools.web.search.timeoutSeconds"
  | "config.field.tools.web.search.cacheTtlMinutes"
  | "config.field.tools.web.fetch.enabled"
  | "config.field.tools.web.fetch.maxChars"
  | "config.field.tools.web.fetch.timeoutSeconds"
  | "config.field.tools.web.fetch.cacheTtlMinutes"
  | "config.field.tools.web.fetch.maxRedirects"
  | "config.field.tools.web.fetch.userAgent"
  | "config.field.agents.defaults.workspace"
  | "config.field.agents.defaults.repoRoot"
  | "config.field.agents.defaults.bootstrapMaxChars"
  | "config.field.agents.defaults.envelopeTimezone"
  | "config.field.agents.defaults.envelopeTimestamp"
  | "config.field.agents.defaults.envelopeElapsed"
  | "config.field.agents.defaults.memorySearch"
  | "config.field.agents.defaults.memorySearch.enabled"
  | "config.field.agents.defaults.memorySearch.sources"
  | "config.field.agents.defaults.memorySearch.experimental.sessionMemory"
  | "config.field.agents.defaults.memorySearch.provider"
  | "config.field.agents.defaults.memorySearch.remote.baseUrl"
  | "config.field.agents.defaults.memorySearch.remote.apiKey"
  | "config.field.agents.defaults.memorySearch.remote.headers"
  | "config.field.agents.defaults.memorySearch.remote.batch.concurrency"
  | "config.field.agents.defaults.memorySearch.model"
  | "config.field.agents.defaults.memorySearch.fallback"
  | "config.field.agents.defaults.memorySearch.local.modelPath"
  | "config.field.agents.defaults.memorySearch.store.path"
  | "config.field.agents.defaults.memorySearch.store.vector.enabled"
  | "config.field.agents.defaults.memorySearch.store.vector.extensionPath"
  | "config.field.agents.defaults.memorySearch.chunking.tokens"
  | "config.field.agents.defaults.memorySearch.chunking.overlap"
  | "config.field.agents.defaults.memorySearch.sync.onSessionStart"
  | "config.field.agents.defaults.memorySearch.sync.onSearch"
  | "config.field.agents.defaults.memorySearch.sync.watch"
  | "config.field.agents.defaults.memorySearch.sync.watchDebounceMs"
  | "config.field.agents.defaults.memorySearch.sync.sessions.deltaBytes"
  | "config.field.agents.defaults.memorySearch.sync.sessions.deltaMessages"
  | "config.field.agents.defaults.memorySearch.query.maxResults"
  | "config.field.agents.defaults.memorySearch.query.minScore"
  | "config.field.agents.defaults.memorySearch.query.hybrid.enabled"
  | "config.field.agents.defaults.memorySearch.query.hybrid.vectorWeight"
  | "config.field.agents.defaults.memorySearch.query.hybrid.textWeight"
  | "config.field.agents.defaults.memorySearch.query.hybrid.candidateMultiplier"
  | "config.field.agents.defaults.memorySearch.cache.enabled"
  | "config.field.agents.defaults.memorySearch.cache.maxEntries"
  | "config.field.agents.defaults.models"
  | "config.field.agents.defaults.model.primary"
  | "config.field.agents.defaults.model.fallbacks"
  | "config.field.agents.defaults.imageModel.primary"
  | "config.field.agents.defaults.imageModel.fallbacks"
  | "config.field.agents.defaults.humanDelay.mode"
  | "config.field.agents.defaults.humanDelay.minMs"
  | "config.field.agents.defaults.humanDelay.maxMs"
  | "config.field.agents.defaults.cliBackends"
  | "config.field.auth.profiles"
  | "config.field.auth.order"
  | "config.field.auth.cooldowns.billingBackoffHours"
  | "config.field.auth.cooldowns.billingBackoffHoursByProvider"
  | "config.field.auth.cooldowns.billingMaxHours"
  | "config.field.auth.cooldowns.failureWindowHours"
  | "config.field.commands.native"
  | "config.field.commands.nativeSkills"
  | "config.field.commands.text"
  | "config.field.commands.bash"
  | "config.field.commands.bashForegroundMs"
  | "config.field.commands.config"
  | "config.field.commands.debug"
  | "config.field.commands.restart"
  | "config.field.commands.useAccessGroups"
  | "config.field.ui.seamColor"
  | "config.field.ui.assistant.name"
  | "config.field.ui.assistant.avatar"
  | "config.field.browser.evaluateEnabled"
  | "config.field.browser.snapshotDefaults"
  | "config.field.browser.snapshotDefaults.mode"
  | "config.field.browser.remoteCdpTimeoutMs"
  | "config.field.browser.remoteCdpHandshakeTimeoutMs"
  | "config.field.session.dmScope"
  | "config.field.session.agentToAgent.maxPingPongTurns"
  | "config.field.messages.ackReaction"
  | "config.field.messages.ackReactionScope"
  | "config.field.messages.inbound.debounceMs"
  | "config.field.talk.apiKey"
  | "config.field.skills.load.watch"
  | "config.field.skills.load.watchDebounceMs"
  | "config.field.plugins.enabled"
  | "config.field.plugins.allow"
  | "config.field.plugins.deny"
  | "config.field.plugins.load.paths"
  | "config.field.plugins.slots"
  | "config.field.plugins.slots.memory"
  | "config.field.plugins.entries"
  | "config.field.discovery.mdns.mode"
  | "config.field.nodeHost.browserProxy.enabled"
  | "config.field.nodeHost.browserProxy.allowProfiles"
  | "config.field.agents.list.identity.avatar"
  | "config.field.agents.list.tools.profile"
  | "config.field.agents.list.tools.alsoAllow"
  | "config.field.agents.list.tools.byProvider"
  | "config.field.plugins.entries.enabled"
  | "config.field.plugins.entries.config"
  | "config.field.plugins.installs.source"
  | "config.field.plugins.installs.spec"
  | "config.field.plugins.installs.sourcePath"
  | "config.field.plugins.installs.installPath"
  | "config.field.plugins.installs.version"
  | "config.field.plugins.installs.installedAt"
  | "channels.discord.field.accounts"
  | "channels.discord.field.actions"
  | "channels.discord.field.dm"
  | "channels.discord.field.guilds"
  | "channels.discord.field.token"
  | "channels.discord.field.enabled"
  | "channels.discord.field.groupPolicy"
  | "channels.discord.field.groupAllowFrom"
  | "channels.discord.field.allowFrom"
  | "channels.discord.field.requireMention"
  | "channels.discord.field.channels"
  | "channels.discord.field.slashCommand"
  | "channels.whatsapp.field.accounts"
  | "channels.whatsapp.field.actions"
  | "channels.whatsapp.field.dmPolicy"
  | "channels.whatsapp.field.groupPolicy"
  | "channels.whatsapp.field.allowFrom"
  | "channels.whatsapp.field.groupAllowFrom"
  | "channels.whatsapp.field.groups"
  | "channels.whatsapp.field.enabled"
  | "channels.whatsapp.field.selfChatMode"
  | "channels.whatsapp.field.debounceMs"
  | "channels.slack.field.accounts"
  | "channels.slack.field.actions"
  | "channels.slack.field.dm"
  | "channels.slack.field.channels"
  | "channels.slack.field.guilds"
  | "channels.slack.field.botToken"
  | "channels.slack.field.appToken"
  | "channels.slack.field.userToken"
  | "channels.slack.field.enabled"
  | "channels.slack.field.groupPolicy"
  | "channels.slack.field.allowFrom"
  | "channels.slack.field.requireMention"
  | "channels.slack.field.slashCommand"
  | "channels.signal.field.accounts"
  | "channels.signal.field.actions"
  | "channels.signal.field.dmPolicy"
  | "channels.signal.field.groupPolicy"
  | "channels.signal.field.allowFrom"
  | "channels.signal.field.groupAllowFrom"
  | "channels.signal.field.groups"
  | "channels.signal.field.enabled"
  | "channels.signal.field.account"
  | "channels.signal.field.baseUrl"
  | "channels.imessage.field.accounts"
  | "channels.imessage.field.actions"
  | "channels.imessage.field.dmPolicy"
  | "channels.imessage.field.groupPolicy"
  | "channels.imessage.field.allowFrom"
  | "channels.imessage.field.groupAllowFrom"
  | "channels.imessage.field.groups"
  | "channels.imessage.field.enabled"
  | "channels.imessage.field.cliPath"
  | "channels.googlechat.field.accounts"
  | "channels.googlechat.field.actions"
  | "channels.googlechat.field.enabled"
  | "channels.googlechat.field.credential"
  | "channels.googlechat.field.audience"
  | "channels.discord.subtitle"
  | "channels.googlechat.subtitle"
  | "channels.config.schemaUnavailable"
  | "channels.config.channelSchemaUnavailable"
  | "channels.config.loading"
  | "channels.config.reload"
  | "channels.accounts.count"
  | "channels.signal.subtitle"
  | "channels.signal.baseUrl"
  | "channels.slack.subtitle"
  | "channels.imessage.subtitle"
  // Sessions card
  | "sessions.card.title"
  | "sessions.card.subtitle"
  // Nodes additional
  | "nodes.card.title"
  | "nodes.card.subtitle"
  | "nodes.execApprovals.title"
  | "nodes.execApprovals.subtitle"
  | "nodes.execApprovals.target.title"
  | "nodes.execApprovals.target.subtitle"
  | "nodes.execApprovals.target.host"
  | "nodes.execApprovals.target.node"
  | "nodes.execApprovals.target.selectNode"
  | "nodes.execApprovals.target.noNodes"
  | "nodes.execApprovals.load"
  | "nodes.execApprovals.loadText"
  | "nodes.execApprovals.scope"
  | "nodes.execApprovals.defaults"
  | "nodes.execApprovals.security.title"
  | "nodes.execApprovals.security.subtitle"
  | "nodes.execApprovals.security.subtitleAgent"
  | "nodes.execApprovals.security.mode"
  | "nodes.execApprovals.security.useDefault"
  | "nodes.execApprovals.ask.title"
  | "nodes.execApprovals.ask.subtitle"
  | "nodes.execApprovals.ask.subtitleAgent"
  | "nodes.execApprovals.askFallback.title"
  | "nodes.execApprovals.askFallback.subtitle"
  | "nodes.execApprovals.askFallback.subtitleAgent"
  | "nodes.execApprovals.askFallback.fallback"
  | "nodes.execApprovals.autoAllow.title"
  | "nodes.execApprovals.autoAllow.subtitle"
  | "nodes.execApprovals.autoAllow.subtitleDefault"
  | "nodes.execApprovals.autoAllow.subtitleOverride"
  | "nodes.execApprovals.allowlist.title"
  | "nodes.execApprovals.allowlist.subtitle"
  | "nodes.execApprovals.allowlist.addPattern"
  | "nodes.execApprovals.allowlist.empty"
  | "nodes.execApprovals.allowlist.pattern"
  | "nodes.execApprovals.allowlist.newPattern"
  | "nodes.execApprovals.allowlist.lastUsed"
  | "nodes.execApprovals.allowlist.remove"
  | "nodes.execApprovals.allowlist.useDefault"
  | "nodes.bindings.title"
  | "nodes.bindings.subtitle"
  | "nodes.bindings.loadText"
  | "nodes.bindings.loadConfig"
  | "nodes.bindings.switchForm"
  | "nodes.bindings.default.title"
  | "nodes.bindings.default.subtitle"
  | "nodes.bindings.default.node"
  | "nodes.bindings.default.anyNode"
  | "nodes.bindings.default.noNodes"
  | "nodes.bindings.agent.title"
  | "nodes.bindings.agent.default"
  | "nodes.bindings.agent.usesDefault"
  | "nodes.bindings.agent.override"
  | "nodes.bindings.agent.binding"
  | "nodes.bindings.agent.useDefault"
  | "nodes.bindings.noAgents"
  | "nodes.devices.title"
  | "nodes.devices.subtitle"
  | "nodes.devices.pending"
  | "nodes.devices.paired"
  | "nodes.devices.role"
  | "nodes.devices.requested"
  | "nodes.devices.repair"
  | "nodes.devices.roles"
  | "nodes.devices.scopes"
  | "nodes.devices.tokens"
  | "nodes.devices.tokensNone"
  | "nodes.devices.active"
  | "nodes.devices.revoked"
  | "nodes.devices.pairedStatus"
  | "nodes.devices.unpairedStatus"
  | "nodes.execApprovals.security.deny"
  | "nodes.execApprovals.security.allowlist"
  | "nodes.execApprovals.security.full"
  | "nodes.execApprovals.ask.off"
  | "nodes.execApprovals.ask.onMiss"
  | "nodes.execApprovals.ask.always"
  | "nodes.execApprovals.target.gateway"
  // Skills card
  | "skills.card.title"
  | "skills.card.subtitle"
  | "skills.search.placeholder"
  | "skills.shown"
  | "skills.eligible"
  | "skills.blocked"
  | "skills.missing"
  | "skills.reason"
  | "skills.installing"
  | "skills.saveKey"
  // Config additional
  | "config.settings"
  | "config.unknown"
  | "config.noChanges"
  | "config.search.placeholder"
  | "config.allSettings"
  | "config.all"
  | "config.update"
  | "config.updating"
  | "config.unsavedChanges"
  | "config.unsavedChange"
  | "config.unsavedChangesPlural"
  | "config.viewPendingChanges"
  | "config.viewPendingChange"
  | "config.viewPendingChangesPlural"
  | "config.loadingSchema"
  | "config.formUnsafe"
  | "config.rawJson5"
  // Logs additional
  | "logs.card.title"
  | "logs.card.subtitle"
  | "logs.filter"
  | "logs.autoFollow"
  | "logs.export.filtered"
  | "logs.export.visible"
  | "logs.empty"
  | "logs.file"
  | "logs.truncated.message"
  | "logs.level.trace"
  | "logs.level.debug"
  | "logs.level.info"
  | "logs.level.warn"
  | "logs.level.error"
  | "logs.level.fatal"
  // Skill descriptions
  | "skill.description.1password"
  | "skill.description.apple-notes"
  | "skill.description.apple-reminders"
  | "skill.description.bear-notes"
  | "skill.description.bird"
  | "skill.description.blogwatcher"
  | "skill.description.blucli"
  | "skill.description.bluebubbles"
  | "skill.description.camsnap"
  | "skill.description.clawdhub"
  | "skill.description.coding-agent"
  | "skill.description.trello"
  | "skill.description.video-frames"
  | "skill.description.voice-call"
  | "skill.description.wacli"
  | "skill.description.weather"
  | "skill.description.tmux"
  | "skill.description.things-mac"
  | "skill.description.summarize"
  | "skill.description.sonoscli"
  | "skill.description.spotify-player"
  | "skill.description.songsee"
  | "skill.description.slack"
  | "skill.description.skill-creator"
  | "skill.description.sherpa-onnx-tts"
  | "skill.description.session-logs"
  | "skill.description.sag"
  | "skill.description.ordercli"
  | "skill.description.peekaboo"
  | "skill.description.openhue"
  | "skill.description.oracle"
  | "skill.description.openai-whisper"
  | "skill.description.openai-whisper-api"
  | "skill.description.openai-image-gen"
  | "skill.description.notion"
  | "skill.description.obsidian"
  | "skill.description.nano-pdf"
  | "skill.description.nano-banana-pro"
  | "skill.description.model-usage"
  | "skill.description.mcporter"
  | "skill.description.local-places"
  | "skill.description.imsg"
  | "skill.description.himalaya"
  | "skill.description.goplaces"
  | "skill.description.gog"
  | "skill.description.github"
  | "skill.description.gemini"
  | "skill.description.gifgrep"
  | "skill.description.eightctl"
  | "skill.description.food-order"
  | "skill.description.discord"
  // Config sections
  | "config.section.env"
  | "config.section.update"
  | "config.section.agents"
  | "config.section.auth"
  | "config.section.channels"
  | "config.section.messages"
  | "config.section.commands"
  | "config.section.hooks"
  | "config.section.skills"
  | "config.section.tools"
  | "config.section.gateway"
  | "config.section.wizard"
  | "config.section.meta"
  | "config.section.logging"
  | "config.section.browser"
  | "config.section.ui"
  | "config.section.models"
  | "config.section.bindings"
  | "config.section.broadcast"
  | "config.section.audio"
  | "config.section.session"
  | "config.section.cron"
  | "config.section.web"
  | "config.section.discovery"
  | "config.section.canvasHost"
  | "config.section.talk"
  | "config.section.plugins"
  | "config.section.env.description"
  | "config.section.update.description"
  | "config.section.agents.description"
  | "config.section.auth.description"
  | "config.section.channels.description"
  | "config.section.messages.description"
  | "config.section.commands.description"
  | "config.section.hooks.description"
  | "config.section.skills.description"
  | "config.section.tools.description"
  | "config.section.gateway.description"
  | "config.section.wizard.description"
  | "config.section.meta.description"
  | "config.section.logging.description"
  | "config.section.browser.description"
  | "config.section.ui.description"
  | "config.section.models.description"
  | "config.section.bindings.description"
  | "config.section.broadcast.description"
  | "config.section.audio.description"
  | "config.section.session.description"
  | "config.section.cron.description"
  | "config.section.web.description"
  | "config.section.discovery.description"
  | "config.section.canvasHost.description"
  | "config.section.talk.description"
  | "config.section.plugins.description"
  | "config.schemaUnavailable"
  | "config.unsupportedSchema"
  | "config.noSettingsMatch"
  | "config.noSettingsInSection"
  | "config.unsupportedSchemaNode"
  // Config form
  | "configForm.add"
  | "configForm.addEntry"
  | "configForm.removeItem"
  | "configForm.resetToDefault"
  | "configForm.select"
  | "configForm.noItems"
  | "configForm.items"
  | "configForm.item"
  | "configForm.customEntries"
  | "configForm.unsupportedArraySchema"
  | "configForm.unsupportedType"
  | "configForm.unsupportedSchemaNode"
  // Debug snapshots
  | "debug.snapshots.title"
  | "debug.snapshots.subtitle"
  | "debug.snapshots.status"
  | "debug.snapshots.health"
  | "debug.snapshots.heartbeat"
  | "debug.snapshots.securityAudit"
  | "debug.snapshots.securityAuditInfo"
  | "debug.snapshots.securityAuditCommand"
  // Debug manual RPC
  | "debug.manualRpc.title"
  | "debug.manualRpc.subtitle"
  | "debug.manualRpc.method"
  | "debug.manualRpc.params"
  | "debug.manualRpc.call"
  // Debug models
  | "debug.models.title"
  | "debug.models.subtitle"
  // Debug event log
  | "debug.eventLog.title"
  | "debug.eventLog.subtitle"
  | "debug.eventLog.empty";

const STORAGE_KEY = "moltbot.ui.locale";

const messages: Record<Locale, Record<TranslationKey, string>> = {
  zh: {
    // Navigation groups
    "nav.group.chat": "聊天",
    "nav.group.control": "控制",
    "nav.group.agent": "代理",
    "nav.group.settings": "设置",
    // Tab titles
    "tab.overview.title": "概览",
    "tab.channels.title": "渠道",
    "tab.instances.title": "实例",
    "tab.sessions.title": "会话",
    "tab.cron.title": "定时任务",
    "tab.skills.title": "技能",
    "tab.nodes.title": "节点",
    "tab.chat.title": "聊天",
    "tab.config.title": "配置",
    "tab.debug.title": "调试",
    "tab.logs.title": "日志",
    // Tab subtitles
    "tab.overview.subtitle": "网关状态、入口和健康概览。",
    "tab.channels.subtitle": "管理渠道和设置。",
    "tab.instances.subtitle": "来自已连接客户端和节点的存在信标。",
    "tab.sessions.subtitle": "检查活动会话并调整每会话默认值。",
    "tab.cron.subtitle": "安排唤醒和定期代理运行。",
    "tab.skills.subtitle": "管理技能可用性和 API 密钥注入。",
    "tab.nodes.subtitle": "配对设备、功能和命令暴露。",
    "tab.chat.subtitle": "直接网关聊天会话，用于快速干预。",
    "tab.config.subtitle": "安全地编辑 ~/.clawdbot/moltbot.json。",
    "tab.debug.subtitle": "网关快照、事件和手动 RPC 调用。",
    "tab.logs.subtitle": "网关文件日志的实时跟踪。",
    // Brand
    "brand.subtitle": "网关控制台",
    // Status
    "status.health": "健康",
    "status.ok": "正常",
    "status.offline": "离线",
    // Resources
    "nav.resources": "资源",
    "nav.docs": "文档",
    "nav.docs.tooltip": "文档（在新标签页中打开）",
    // Common
    "common.loading": "加载中…",
    "common.refresh": "刷新",
    "common.saving": "保存中…",
    "common.save": "保存",
    "common.cancel": "取消",
    "common.delete": "删除",
    "common.connect": "连接",
    "common.disconnect": "断开",
    "common.close": "关闭",
    "common.open": "打开",
    "common.edit": "编辑",
    "common.add": "添加",
    "common.remove": "移除",
    "common.enable": "启用",
    "common.disable": "禁用",
    "common.enabled": "已启用",
    "common.disabled": "已禁用",
    "common.yes": "是",
    "common.no": "否",
    "common.any": "任意",
    "common.ok": "确定",
    "common.error": "错误",
    "common.success": "成功",
    "common.warning": "警告",
    "common.info": "信息",
    // Sidebar
    "sidebar.expand": "展开侧边栏",
    "sidebar.collapse": "收起侧边栏",
    // Overview
    "overview.title": "概览",
    "overview.subtitle": "网关状态、入口和健康概览。",
    "overview.connect.button": "连接",
    "overview.refresh.button": "刷新",
    "overview.uptime": "运行时间",
    "overview.tick": "心跳间隔",
    "overview.presence.count": "存在信标",
    "overview.sessions.count": "会话",
    "overview.cron.enabled": "定时任务已启用",
    "overview.cron.disabled": "定时任务已禁用",
    "overview.cron.next": "下次运行",
    "overview.channels.lastRefresh": "最后刷新",
    "overview.auth.hint.noAuth": "此网关需要身份验证。添加令牌或密码，然后点击连接。",
    "overview.auth.hint.failed": "身份验证失败。使用 moltbot dashboard --no-open 重新复制带令牌的 URL，或更新令牌，然后点击连接。",
    "overview.auth.hint.docs": "文档：控制台 UI 身份验证",
    "overview.insecure.hint": "此页面是 HTTP，因此浏览器会阻止设备身份。使用 HTTPS（Tailscale Serve）或在网关门主机上打开 http://127.0.0.1:18789。",
    "overview.insecure.allowInsecure": "如果必须使用 HTTP，请设置 gateway.controlUi.allowInsecureAuth: true（仅令牌）。",
    "overview.insecure.docs": "文档：Tailscale",
    "overview.gatewayUrl.label": "网关 URL",
    "overview.token.label": "令牌",
    "overview.password.label": "密码",
    "overview.sessionKey.label": "会话密钥",
    "overview.gatewayAccess.title": "网关访问",
    "overview.gatewayAccess.subtitle": "控制台连接位置和身份验证方式。",
    "overview.snapshot.title": "快照",
    "overview.snapshot.subtitle": "最新的网关握手信息。",
    "overview.snapshot.status": "状态",
    "overview.snapshot.hint": "使用渠道链接 WhatsApp、Telegram、Discord、Signal 或 iMessage。",
    "overview.notes.title": "备注",
    "overview.notes.subtitle": "远程控制设置的快速提醒。",
    "overview.notes.tailscale.title": "Tailscale serve",
    "overview.notes.tailscale.desc": "优先使用 serve 模式，将网关保持在 loopback 并使用 tailnet 身份验证。",
    "overview.notes.hygiene.title": "会话清理",
    "overview.notes.hygiene.desc": "使用 /new 或 sessions.patch 重置上下文。",
    "overview.notes.cron.title": "定时任务提醒",
    "overview.notes.cron.desc": "对定期运行使用隔离会话。",
    // Chat
    "chat.send": "发送",
    "chat.abort": "中止",
    "chat.placeholder": "输入消息…",
    "chat.refresh": "刷新",
    "chat.compacting": "正在压缩上下文…",
    "chat.compacted": "上下文已压缩",
    "chat.thinking.toggle": "切换助手思考/工作输出",
    "chat.focus.toggle": "切换专注模式（隐藏侧边栏 + 页面标题）",
    "chat.focus.toggle.disabled": "入门期间已禁用",
    "chat.thinking.toggle.disabled": "入门期间已禁用",
    "chat.refresh.tooltip": "刷新聊天历史",
    "chat.disconnected": "已断开与网关的连接。",
    "chat.empty": "暂无消息。发送消息开始对话。",
    "chat.queue.title": "队列",
    "chat.queue.empty": "队列为空",
    "chat.queue.remove": "移除",
    "chat.queue.clear": "清空",
    "chat.newSession": "新会话",
    "chat.history.truncated": "显示最后 {limit} 条消息（{hidden} 条已隐藏）。",
    "chat.attachment.preview": "附件预览",
    "chat.attachment.remove": "移除附件",
    "chat.focus.exit": "退出专注模式",
    "chat.queue.removeItem": "移除队列消息",
    // Channels additional
    "channels.health.title": "渠道健康",
    "channels.health.subtitle": "来自网关的渠道状态快照。",
    "channels.health.noSnapshot": "暂无快照。",
    "channels.status.configured": "已配置",
    "channels.status.linked": "已链接",
    "channels.status.running": "运行中",
    "channels.status.mode": "模式",
    "channels.status.lastConnect": "最后连接",
    "channels.status.lastMessage": "最后消息",
    "channels.status.authAge": "认证年龄",
    "channels.status.lastStart": "最后启动",
    "channels.status.lastProbe": "最后探测",
    "channels.status.lastInbound": "最后入站",
    "channels.status.credential": "凭证",
    "channels.status.audience": "受众",
    "channels.whatsapp.subtitle": "链接 WhatsApp Web 并监控连接健康。",
    "channels.whatsapp.showQr": "显示二维码",
    "channels.whatsapp.working": "工作中…",
    "channels.whatsapp.relink": "重新链接",
    "channels.whatsapp.waitScan": "等待扫描",
    "channels.whatsapp.logout": "登出",
    "channels.whatsapp.qrAlt": "WhatsApp 二维码",
    "channels.telegram.subtitle": "机器人状态和渠道配置。",
    "channels.telegram.blurb": "最简单的入门方式 — 通过 @BotFather 注册机器人即可开始。",
    "channels.telegram.probe": "探测",
    "channels.telegram.probeOk": "探测正常",
    "channels.telegram.probeFailed": "探测失败",
    "channels.telegram.field.accounts": "账户",
    "channels.telegram.field.actions": "操作",
    "channels.telegram.field.deleteMessage": "删除消息",
    "channels.telegram.field.reactions": "反应",
    "channels.telegram.field.sendMessage": "发送消息",
    "channels.telegram.field.sticker": "贴纸",
    "channels.telegram.field.allowFrom": "允许来源",
    "channels.telegram.field.groupPolicy": "群组策略",
    "channels.telegram.field.dmPolicy": "私信策略",
    "channels.telegram.field.groupAllowFrom": "群组允许来源",
    "channels.telegram.field.groups": "群组",
    "channels.telegram.field.enabled": "启用",
    "channels.telegram.field.botToken": "机器人令牌",
    "channels.telegram.field.requireMention": "需要提及",
    "channels.telegram.field.customCommands": "自定义命令",
    "channels.telegram.field.streamMode": "流模式",
    "channels.telegram.field.draftChunk": "草稿块",
    "channels.telegram.field.retry": "重试",
    "channels.telegram.field.network": "网络",
    "channels.telegram.field.timeoutSeconds": "超时（秒）",
    "channels.telegram.field.capabilities": "能力",
    "channels.telegram.field.inlineButtons": "内联按钮",
    "channels.telegram.field.blockStreaming": "阻止流式传输",
    "channels.telegram.field.blockStreamingCoalesce": "阻止流式传输合并",
    "channels.telegram.field.idleMs": "空闲（毫秒）",
    "channels.telegram.field.maxChars": "最大字符数",
    "channels.telegram.field.minChars": "最小字符数",
    "channels.telegram.field.chunkMode": "块模式",
    "channels.telegram.field.length": "长度",
    "channels.telegram.field.newline": "换行",
    "channels.telegram.field.commands": "命令",
    "channels.telegram.field.native": "原生",
    "channels.telegram.field.nativeSkills": "原生技能",
    "channels.telegram.field.configWrites": "配置写入",
    "channels.telegram.field.dmHistoryLimit": "私信历史限制",
    "channels.telegram.field.dms": "私信",
    "channels.telegram.field.replyToMode": "回复模式",
    "channels.telegram.field.off": "关闭",
    "channels.telegram.field.first": "首个",
    "channels.telegram.field.all": "全部",
    "channels.telegram.field.attempts": "尝试次数",
    "channels.telegram.field.jitter": "抖动",
    "channels.telegram.field.maxDelayMs": "最大延迟（毫秒）",
    "channels.telegram.field.minDelayMs": "最小延迟（毫秒）",
    "channels.telegram.field.breakPreference": "断点偏好",
    "channels.telegram.field.paragraph": "段落",
    "channels.telegram.field.sentence": "句子",
    "channels.telegram.field.partial": "部分",
    "channels.telegram.field.block": "块",
    "channels.telegram.field.reactionNotifications": "反应通知",
    "channels.telegram.field.own": "自己的",
    "channels.telegram.field.textChunkLimit": "文本块限制",
    "channels.telegram.field.tokenFile": "令牌文件",
    "channels.telegram.field.webhookPath": "Webhook 路径",
    "channels.telegram.field.webhookSecret": "Webhook 密钥",
    "channels.telegram.field.webhookUrl": "Webhook URL",
    "channels.telegram.field.useIndicator": "使用指示器",
    "channels.telegram.field.historyLimit": "历史限制",
    "channels.telegram.field.linkPreview": "链接预览",
    "channels.telegram.field.markdown": "Markdown",
    "channels.telegram.field.tables": "表格",
    "channels.telegram.field.mediaMaxMb": "媒体最大 MB",
    "channels.telegram.field.bullets": "项目符号",
    "channels.telegram.field.code": "代码",
    "channels.telegram.field.pairing": "配对",
    "channels.telegram.field.allowlist": "允许列表",
    "channels.telegram.field.open": "开放",
    "channels.telegram.field.disabled": "禁用",
    "channels.telegram.field.ack": "确认",
    "channels.telegram.field.minimal": "最小",
    "channels.telegram.field.extensive": "扩展",
    "channels.telegram.field.draftChunk.minChars": "草稿块最小字符数",
    "channels.telegram.field.draftChunk.maxChars": "草稿块最大字符数",
    "channels.telegram.field.draftChunk.breakPreference": "草稿块断点偏好",
    "channels.telegram.field.retry.attempts": "重试尝试次数",
    "channels.telegram.field.retry.minDelayMs": "重试最小延迟（毫秒）",
    "channels.telegram.field.retry.maxDelayMs": "重试最大延迟（毫秒）",
    "channels.telegram.field.retry.jitter": "重试抖动",
    "channels.telegram.field.network.autoSelectFamily": "网络自动选择族",
    "channels.telegram.field.capabilities.inlineButtons": "能力内联按钮",
    "config.field.update.checkOnStart": "启动时检查更新",
    "config.field.diagnostics.cacheTrace": "缓存跟踪",
    "config.field.diagnostics.cacheTrace.enabled": "缓存跟踪已启用",
    "config.field.diagnostics.cacheTrace.filePath": "缓存跟踪文件路径",
    "config.field.diagnostics.cacheTrace.includeMessages": "缓存跟踪包含消息",
    "config.field.diagnostics.cacheTrace.includePrompt": "缓存跟踪包含提示",
    "config.field.diagnostics.cacheTrace.includeSystem": "缓存跟踪包含系统",
    "config.field.meta.lastTouchedVersion": "配置最后修改版本",
    "config.field.meta.lastTouchedAt": "配置最后修改时间",
    "config.field.update.channel": "更新渠道",
    "config.field.diagnostics.enabled": "诊断已启用",
    "config.field.diagnostics.flags": "诊断标志",
    "config.field.diagnostics.otel.enabled": "OpenTelemetry 已启用",
    "config.field.diagnostics.otel.endpoint": "OpenTelemetry 端点",
    "config.field.diagnostics.otel.protocol": "OpenTelemetry 协议",
    "config.field.diagnostics.otel.headers": "OpenTelemetry 请求头",
    "config.field.diagnostics.otel.serviceName": "OpenTelemetry 服务名称",
    "config.field.diagnostics.otel.traces": "OpenTelemetry 跟踪已启用",
    "config.field.diagnostics.otel.metrics": "OpenTelemetry 指标已启用",
    "config.field.diagnostics.otel.logs": "OpenTelemetry 日志已启用",
    "config.field.diagnostics.otel.sampleRate": "OpenTelemetry 跟踪采样率",
    "config.field.diagnostics.otel.flushIntervalMs": "OpenTelemetry 刷新间隔（毫秒）",
    "config.field.gateway.remote.url": "远程网关 URL",
    "config.field.gateway.remote.sshTarget": "远程网关 SSH 目标",
    "config.field.gateway.remote.sshIdentity": "远程网关 SSH 身份",
    "config.field.gateway.remote.token": "远程网关令牌",
    "config.field.gateway.remote.password": "远程网关密码",
    "config.field.gateway.remote.tlsFingerprint": "远程网关 TLS 指纹",
    "config.field.gateway.auth.token": "网关令牌",
    "config.field.gateway.auth.password": "网关密码",
    "config.field.gateway.controlUi.basePath": "控制 UI 基础路径",
    "config.field.gateway.controlUi.allowInsecureAuth": "允许不安全的控制 UI 身份验证",
    "config.field.gateway.controlUi.dangerouslyDisableDeviceAuth": "危险：禁用控制 UI 设备身份验证",
    "config.field.gateway.http.endpoints.chatCompletions.enabled": "OpenAI 聊天补全端点",
    "config.field.gateway.reload.mode": "配置重载模式",
    "config.field.gateway.reload.debounceMs": "配置重载防抖（毫秒）",
    "config.field.gateway.nodes.browser.mode": "网关节点浏览器模式",
    "config.field.gateway.nodes.browser.node": "网关节点浏览器固定",
    "config.field.gateway.nodes.allowCommands": "网关节点允许列表（额外命令）",
    "config.field.gateway.nodes.denyCommands": "网关节点拒绝列表",
    "config.field.tools.media.image.enabled": "启用图像理解",
    "config.field.tools.media.image.maxBytes": "图像理解最大字节数",
    "config.field.tools.media.image.maxChars": "图像理解最大字符数",
    "config.field.tools.media.image.prompt": "图像理解提示",
    "config.field.tools.media.image.timeoutSeconds": "图像理解超时（秒）",
    "config.field.tools.media.image.attachments": "图像理解附件策略",
    "config.field.tools.media.image.models": "图像理解模型",
    "config.field.tools.media.image.scope": "图像理解作用域",
    "config.field.tools.media.models": "媒体理解共享模型",
    "config.field.tools.media.concurrency": "媒体理解并发数",
    "config.field.tools.media.audio.enabled": "启用音频理解",
    "config.field.tools.media.audio.maxBytes": "音频理解最大字节数",
    "config.field.tools.media.audio.maxChars": "音频理解最大字符数",
    "config.field.tools.media.audio.prompt": "音频理解提示",
    "config.field.tools.media.audio.timeoutSeconds": "音频理解超时（秒）",
    "config.field.tools.media.audio.language": "音频理解语言",
    "config.field.tools.media.audio.attachments": "音频理解附件策略",
    "config.field.tools.media.audio.models": "音频理解模型",
    "config.field.tools.media.audio.scope": "音频理解作用域",
    "config.field.tools.media.video.enabled": "启用视频理解",
    "config.field.tools.media.video.maxBytes": "视频理解最大字节数",
    "config.field.tools.media.video.maxChars": "视频理解最大字符数",
    "config.field.tools.media.video.prompt": "视频理解提示",
    "config.field.tools.media.video.timeoutSeconds": "视频理解超时（秒）",
    "config.field.tools.media.video.attachments": "视频理解附件策略",
    "config.field.tools.media.video.models": "视频理解模型",
    "config.field.tools.media.video.scope": "视频理解作用域",
    "config.field.tools.links.enabled": "启用链接理解",
    "config.field.tools.links.maxLinks": "链接理解最大链接数",
    "config.field.tools.links.timeoutSeconds": "链接理解超时（秒）",
    "config.field.tools.links.models": "链接理解模型",
    "config.field.tools.links.scope": "链接理解作用域",
    "config.field.tools.profile": "工具配置文件",
    "config.field.tools.alsoAllow": "工具允许列表补充",
    "config.field.tools.byProvider": "按提供商的工具策略",
    "config.field.tools.exec.applyPatch.enabled": "启用 apply_patch",
    "config.field.tools.exec.applyPatch.allowModels": "apply_patch 模型允许列表",
    "config.field.tools.exec.notifyOnExit": "执行退出时通知",
    "config.field.tools.exec.approvalRunningNoticeMs": "执行审批运行通知（毫秒）",
    "config.field.tools.exec.host": "执行主机",
    "config.field.tools.exec.security": "执行安全",
    "config.field.tools.exec.ask": "执行询问",
    "config.field.tools.exec.node": "执行节点绑定",
    "config.field.tools.exec.pathPrepend": "执行 PATH 前置",
    "config.field.tools.exec.safeBins": "执行安全二进制文件",
    "config.field.tools.message.allowCrossContextSend": "允许跨上下文消息",
    "config.field.tools.message.crossContext.allowWithinProvider": "允许跨上下文（同一提供商）",
    "config.field.tools.message.crossContext.allowAcrossProviders": "允许跨上下文（跨提供商）",
    "config.field.tools.message.crossContext.marker.enabled": "跨上下文标记",
    "config.field.tools.message.crossContext.marker.prefix": "跨上下文标记前缀",
    "config.field.tools.message.crossContext.marker.suffix": "跨上下文标记后缀",
    "config.field.tools.message.broadcast.enabled": "启用消息广播",
    "config.field.tools.web.search.enabled": "启用网络搜索工具",
    "config.field.tools.web.search.provider": "网络搜索提供商",
    "config.field.tools.web.search.apiKey": "Brave 搜索 API 密钥",
    "config.field.tools.web.search.maxResults": "网络搜索最大结果数",
    "config.field.tools.web.search.timeoutSeconds": "网络搜索超时（秒）",
    "config.field.tools.web.search.cacheTtlMinutes": "网络搜索缓存 TTL（分钟）",
    "config.field.tools.web.fetch.enabled": "启用网络获取工具",
    "config.field.tools.web.fetch.maxChars": "网络获取最大字符数",
    "config.field.tools.web.fetch.timeoutSeconds": "网络获取超时（秒）",
    "config.field.tools.web.fetch.cacheTtlMinutes": "网络获取缓存 TTL（分钟）",
    "config.field.tools.web.fetch.maxRedirects": "网络获取最大重定向数",
    "config.field.tools.web.fetch.userAgent": "网络获取 User-Agent",
    "config.field.agents.defaults.workspace": "工作区",
    "config.field.agents.defaults.repoRoot": "仓库根目录",
    "config.field.agents.defaults.bootstrapMaxChars": "引导最大字符数",
    "config.field.agents.defaults.envelopeTimezone": "信封时区",
    "config.field.agents.defaults.envelopeTimestamp": "信封时间戳",
    "config.field.agents.defaults.envelopeElapsed": "信封经过时间",
    "config.field.agents.defaults.memorySearch": "记忆搜索",
    "config.field.agents.defaults.memorySearch.enabled": "启用记忆搜索",
    "config.field.agents.defaults.memorySearch.sources": "记忆搜索源",
    "config.field.agents.defaults.memorySearch.experimental.sessionMemory": "记忆搜索会话索引（实验性）",
    "config.field.agents.defaults.memorySearch.provider": "记忆搜索提供商",
    "config.field.agents.defaults.memorySearch.remote.baseUrl": "远程嵌入基础 URL",
    "config.field.agents.defaults.memorySearch.remote.apiKey": "远程嵌入 API 密钥",
    "config.field.agents.defaults.memorySearch.remote.headers": "远程嵌入请求头",
    "config.field.agents.defaults.memorySearch.remote.batch.concurrency": "远程批处理并发数",
    "config.field.agents.defaults.memorySearch.model": "记忆搜索模型",
    "config.field.agents.defaults.memorySearch.fallback": "记忆搜索回退",
    "config.field.agents.defaults.memorySearch.local.modelPath": "本地嵌入模型路径",
    "config.field.agents.defaults.memorySearch.store.path": "记忆搜索索引路径",
    "config.field.agents.defaults.memorySearch.store.vector.enabled": "记忆搜索向量索引",
    "config.field.agents.defaults.memorySearch.store.vector.extensionPath": "记忆搜索向量扩展路径",
    "config.field.agents.defaults.memorySearch.chunking.tokens": "记忆块令牌数",
    "config.field.agents.defaults.memorySearch.chunking.overlap": "记忆块重叠令牌数",
    "config.field.agents.defaults.memorySearch.sync.onSessionStart": "会话开始时索引",
    "config.field.agents.defaults.memorySearch.sync.onSearch": "搜索时索引（延迟）",
    "config.field.agents.defaults.memorySearch.sync.watch": "监视记忆文件",
    "config.field.agents.defaults.memorySearch.sync.watchDebounceMs": "记忆监视防抖（毫秒）",
    "config.field.agents.defaults.memorySearch.sync.sessions.deltaBytes": "会话增量字节数",
    "config.field.agents.defaults.memorySearch.sync.sessions.deltaMessages": "会话增量消息数",
    "config.field.agents.defaults.memorySearch.query.maxResults": "记忆搜索最大结果数",
    "config.field.agents.defaults.memorySearch.query.minScore": "记忆搜索最小分数",
    "config.field.agents.defaults.memorySearch.query.hybrid.enabled": "记忆搜索混合",
    "config.field.agents.defaults.memorySearch.query.hybrid.vectorWeight": "记忆搜索向量权重",
    "config.field.agents.defaults.memorySearch.query.hybrid.textWeight": "记忆搜索文本权重",
    "config.field.agents.defaults.memorySearch.query.hybrid.candidateMultiplier": "记忆搜索混合候选倍数",
    "config.field.agents.defaults.memorySearch.cache.enabled": "记忆搜索嵌入缓存",
    "config.field.agents.defaults.memorySearch.cache.maxEntries": "记忆搜索嵌入缓存最大条目数",
    "config.field.agents.defaults.models": "模型",
    "config.field.agents.defaults.model.primary": "主要模型",
    "config.field.agents.defaults.model.fallbacks": "模型回退",
    "config.field.agents.defaults.imageModel.primary": "图像模型",
    "config.field.agents.defaults.imageModel.fallbacks": "图像模型回退",
    "config.field.agents.defaults.humanDelay.mode": "人工延迟模式",
    "config.field.agents.defaults.humanDelay.minMs": "人工延迟最小（毫秒）",
    "config.field.agents.defaults.humanDelay.maxMs": "人工延迟最大（毫秒）",
    "config.field.agents.defaults.cliBackends": "CLI 后端",
    "config.field.auth.profiles": "身份验证配置文件",
    "config.field.auth.order": "身份验证配置文件顺序",
    "config.field.auth.cooldowns.billingBackoffHours": "计费退避（小时）",
    "config.field.auth.cooldowns.billingBackoffHoursByProvider": "计费退避覆盖",
    "config.field.auth.cooldowns.billingMaxHours": "计费退避上限（小时）",
    "config.field.auth.cooldowns.failureWindowHours": "故障转移窗口（小时）",
    "config.field.commands.native": "原生命令",
    "config.field.commands.nativeSkills": "原生技能命令",
    "config.field.commands.text": "文本命令",
    "config.field.commands.bash": "允许 Bash 聊天命令",
    "config.field.commands.bashForegroundMs": "Bash 前台窗口（毫秒）",
    "config.field.commands.config": "允许 /config",
    "config.field.commands.debug": "允许 /debug",
    "config.field.commands.restart": "允许重启",
    "config.field.commands.useAccessGroups": "使用访问组",
    "config.field.ui.seamColor": "强调色",
    "config.field.ui.assistant.name": "助手名称",
    "config.field.ui.assistant.avatar": "助手头像",
    "config.field.browser.evaluateEnabled": "浏览器评估已启用",
    "config.field.browser.snapshotDefaults": "浏览器快照默认值",
    "config.field.browser.snapshotDefaults.mode": "浏览器快照模式",
    "config.field.browser.remoteCdpTimeoutMs": "远程 CDP 超时（毫秒）",
    "config.field.browser.remoteCdpHandshakeTimeoutMs": "远程 CDP 握手超时（毫秒）",
    "config.field.session.dmScope": "私信会话作用域",
    "config.field.session.agentToAgent.maxPingPongTurns": "代理到代理乒乓轮数",
    "config.field.messages.ackReaction": "确认反应表情",
    "config.field.messages.ackReactionScope": "确认反应作用域",
    "config.field.messages.inbound.debounceMs": "入站消息防抖（毫秒）",
    "config.field.talk.apiKey": "Talk API 密钥",
    "config.field.skills.load.watch": "监视技能",
    "config.field.skills.load.watchDebounceMs": "技能监视防抖（毫秒）",
    "config.field.plugins.enabled": "启用插件",
    "config.field.plugins.allow": "插件允许列表",
    "config.field.plugins.deny": "插件拒绝列表",
    "config.field.plugins.load.paths": "插件加载路径",
    "config.field.plugins.slots": "插件插槽",
    "config.field.plugins.slots.memory": "记忆插件",
    "config.field.plugins.entries": "插件条目",
    "config.field.discovery.mdns.mode": "mDNS 发现模式",
    "config.field.nodeHost.browserProxy.enabled": "节点浏览器代理已启用",
    "config.field.nodeHost.browserProxy.allowProfiles": "节点浏览器代理允许的配置文件",
    "config.field.agents.list.identity.avatar": "代理头像",
    "config.field.agents.list.tools.profile": "代理工具配置文件",
    "config.field.agents.list.tools.alsoAllow": "代理工具允许列表补充",
    "config.field.agents.list.tools.byProvider": "代理工具按提供商的策略",
    "config.field.plugins.entries.enabled": "插件已启用",
    "config.field.plugins.entries.config": "插件配置",
    "config.field.plugins.installs.source": "插件安装源",
    "config.field.plugins.installs.spec": "插件安装规格",
    "config.field.plugins.installs.sourcePath": "插件安装源路径",
    "config.field.plugins.installs.installPath": "插件安装路径",
    "config.field.plugins.installs.version": "插件安装版本",
    "config.field.plugins.installs.installedAt": "插件安装时间",
    "channels.discord.field.accounts": "账户",
    "channels.discord.field.actions": "操作",
    "channels.discord.field.dm": "私信",
    "channels.discord.field.guilds": "服务器",
    "channels.discord.field.token": "令牌",
    "channels.discord.field.enabled": "启用",
    "channels.discord.field.groupPolicy": "群组策略",
    "channels.discord.field.groupAllowFrom": "群组允许来源",
    "channels.discord.field.allowFrom": "允许来源",
    "channels.discord.field.requireMention": "需要提及",
    "channels.discord.field.channels": "频道",
    "channels.discord.field.slashCommand": "斜杠命令",
    "channels.whatsapp.field.accounts": "账户",
    "channels.whatsapp.field.actions": "操作",
    "channels.whatsapp.field.dmPolicy": "私信策略",
    "channels.whatsapp.field.groupPolicy": "群组策略",
    "channels.whatsapp.field.allowFrom": "允许来源",
    "channels.whatsapp.field.groupAllowFrom": "群组允许来源",
    "channels.whatsapp.field.groups": "群组",
    "channels.whatsapp.field.enabled": "启用",
    "channels.whatsapp.field.selfChatMode": "自聊天模式",
    "channels.whatsapp.field.debounceMs": "防抖（毫秒）",
    "channels.slack.field.accounts": "账户",
    "channels.slack.field.actions": "操作",
    "channels.slack.field.dm": "私信",
    "channels.slack.field.channels": "频道",
    "channels.slack.field.guilds": "工作区",
    "channels.slack.field.botToken": "机器人令牌",
    "channels.slack.field.appToken": "应用令牌",
    "channels.slack.field.userToken": "用户令牌",
    "channels.slack.field.enabled": "启用",
    "channels.slack.field.groupPolicy": "群组策略",
    "channels.slack.field.allowFrom": "允许来源",
    "channels.slack.field.requireMention": "需要提及",
    "channels.slack.field.slashCommand": "斜杠命令",
    "channels.signal.field.accounts": "账户",
    "channels.signal.field.actions": "操作",
    "channels.signal.field.dmPolicy": "私信策略",
    "channels.signal.field.groupPolicy": "群组策略",
    "channels.signal.field.allowFrom": "允许来源",
    "channels.signal.field.groupAllowFrom": "群组允许来源",
    "channels.signal.field.groups": "群组",
    "channels.signal.field.enabled": "启用",
    "channels.signal.field.account": "账户",
    "channels.signal.field.baseUrl": "基础 URL",
    "channels.imessage.field.accounts": "账户",
    "channels.imessage.field.actions": "操作",
    "channels.imessage.field.dmPolicy": "私信策略",
    "channels.imessage.field.groupPolicy": "群组策略",
    "channels.imessage.field.allowFrom": "允许来源",
    "channels.imessage.field.groupAllowFrom": "群组允许来源",
    "channels.imessage.field.groups": "群组",
    "channels.imessage.field.enabled": "启用",
    "channels.imessage.field.cliPath": "CLI 路径",
    "channels.googlechat.field.accounts": "账户",
    "channels.googlechat.field.actions": "操作",
    "channels.googlechat.field.enabled": "启用",
    "channels.googlechat.field.credential": "凭据",
    "channels.googlechat.field.audience": "受众",
    "channels.discord.subtitle": "机器人状态和渠道配置。",
    "channels.googlechat.subtitle": "聊天 API Webhook 状态和渠道配置。",
    "channels.config.schemaUnavailable": "架构不可用。使用原始模式。",
    "channels.config.channelSchemaUnavailable": "渠道配置架构不可用。",
    "channels.config.loading": "加载配置架构…",
    "channels.config.reload": "重新加载",
    "channels.accounts.count": "账户（{count}）",
    "channels.signal.subtitle": "signal-cli 状态和渠道配置。",
    "channels.signal.baseUrl": "基础 URL",
    "channels.slack.subtitle": "Socket 模式状态和渠道配置。",
    "channels.imessage.subtitle": "macOS 桥接状态和渠道配置。",
    // Channels
    "channels.refresh": "刷新",
    "channels.loading": "加载中…",
    "channels.error": "错误",
    "channels.lastRefresh": "最后刷新",
    "channels.status.connected": "已连接",
    "channels.status.disconnected": "已断开",
    "channels.status.error": "错误",
    // Instances
    "instances.title": "实例",
    "instances.subtitle": "来自已连接客户端和节点的存在信标。",
    "instances.loading": "加载中…",
    "instances.empty": "暂无实例",
    "instances.refresh": "刷新",
    "instances.card.title": "已连接实例",
    "instances.card.subtitle": "来自网关和客户端的存在信标。",
    "instances.unknownHost": "未知主机",
    "instances.lastInput": "最后输入",
    "instances.reason": "原因",
    "instances.scopes": "作用域",
    // Sessions
    "sessions.title": "会话",
    "sessions.subtitle": "检查活动会话并调整每会话默认值。",
    "sessions.loading": "加载中…",
    "sessions.empty": "暂无会话",
    "sessions.refresh": "刷新",
    "sessions.filter.active": "活动",
    "sessions.filter.limit": "限制",
    "sessions.filter.includeGlobal": "包含全局",
    "sessions.filter.includeUnknown": "包含未知",
    "sessions.delete": "删除",
    "sessions.patch": "更新",
    "sessions.store": "存储：",
    "sessions.table.key": "密钥",
    "sessions.table.label": "标签",
    "sessions.table.kind": "类型",
    "sessions.table.updated": "更新",
    "sessions.table.tokens": "令牌",
    "sessions.table.thinking": "思考",
    "sessions.table.verbose": "详细",
    "sessions.table.reasoning": "推理",
    "sessions.table.actions": "操作",
    "sessions.optional": "（可选）",
    "sessions.inherit": "继承",
    "sessions.card.title": "会话",
    "sessions.card.subtitle": "活动会话密钥和每会话覆盖。",
    // Cron
    "cron.title": "定时任务",
    "cron.subtitle": "安排唤醒和定期代理运行。",
    "cron.loading": "加载中…",
    "cron.refresh": "刷新",
    "cron.add": "添加",
    "cron.remove": "删除",
    "cron.run": "运行",
    "cron.toggle": "切换",
    "cron.enabled": "已启用",
    "cron.disabled": "已禁用",
    "cron.runs": "运行记录",
    "cron.runs.empty": "暂无运行记录",
    "cron.form.schedule": "计划",
    "cron.form.sessionKey": "会话密钥",
    "cron.form.message": "消息",
    "cron.scheduler.title": "调度器",
    "cron.scheduler.subtitle": "网关拥有的定时任务调度器状态。",
    "cron.scheduler.nextWake": "下次唤醒",
    "cron.scheduler.jobs": "任务",
    "cron.newJob.title": "新任务",
    "cron.newJob.subtitle": "创建计划的唤醒或代理运行。",
    "cron.form.name": "名称",
    "cron.form.description": "描述",
    "cron.form.agentId": "代理 ID",
    "cron.form.wakeMode": "唤醒模式",
    "cron.form.payload": "负载",
    "cron.form.systemText": "系统文本",
    "cron.form.agentMessage": "代理消息",
    "cron.form.deliver": "交付",
    "cron.form.channel": "渠道",
    "cron.jobs.title": "任务",
    "cron.jobs.subtitle": "存储在网关中的所有计划任务。",
    "cron.runs.title": "运行历史",
    "cron.runs.subtitle": "最新运行记录：{jobId}。",
    "cron.runs.selectJob": "选择任务以查看运行历史。",
    // Skills
    "skills.title": "技能",
    "skills.subtitle": "管理技能可用性和 API 密钥注入。",
    "skills.loading": "加载中…",
    "skills.refresh": "刷新",
    "skills.filter": "筛选",
    "skills.install": "安装",
    "skills.update": "更新",
    "skills.enable": "启用",
    "skills.disable": "禁用",
    "skills.apiKey": "API 密钥",
    "skills.apiKey.save": "保存",
    "skills.apiKey.placeholder": "输入 API 密钥…",
    "skills.card.title": "技能",
    "skills.card.subtitle": "捆绑、管理和工作区技能。",
    "skills.search.placeholder": "搜索技能",
    "skills.shown": "{count} 显示",
    "skills.eligible": "可用",
    "skills.blocked": "已阻止",
    "skills.missing": "缺失：",
    "skills.reason": "原因：",
    "skills.installing": "安装中…",
    "skills.saveKey": "保存密钥",
    // Nodes
    "nodes.title": "节点",
    "nodes.subtitle": "配对设备、功能和命令暴露。",
    "nodes.loading": "加载中…",
    "nodes.refresh": "刷新",
    "nodes.devices.refresh": "刷新",
    "nodes.devices.title": "设备",
    "nodes.devices.empty": "暂无设备",
    "nodes.device.approve": "批准",
    "nodes.device.reject": "拒绝",
    "nodes.device.revoke": "撤销",
    "nodes.device.rotate": "轮换",
    "nodes.card.title": "节点",
    "nodes.card.subtitle": "配对设备和生活链接。",
    "nodes.execApprovals.title": "执行审批",
    "nodes.execApprovals.subtitle": "exec host=gateway/node 的允许列表和审批策略。",
    "nodes.execApprovals.target.title": "目标",
    "nodes.execApprovals.target.subtitle": "网关编辑本地审批；节点编辑所选节点。",
    "nodes.execApprovals.target.host": "主机",
    "nodes.execApprovals.target.node": "节点",
    "nodes.execApprovals.target.selectNode": "选择节点",
    "nodes.execApprovals.target.noNodes": "暂无节点发布执行审批。",
    "nodes.execApprovals.load": "加载审批",
    "nodes.execApprovals.loadText": "加载执行审批以编辑允许列表。",
    "nodes.execApprovals.scope": "范围",
    "nodes.execApprovals.defaults": "默认值",
    "nodes.execApprovals.security.title": "安全",
    "nodes.execApprovals.security.subtitle": "默认安全模式。",
    "nodes.execApprovals.security.subtitleAgent": "默认：{security}。",
    "nodes.execApprovals.security.mode": "模式",
    "nodes.execApprovals.security.useDefault": "使用默认值（{security}）",
    "nodes.execApprovals.ask.title": "询问",
    "nodes.execApprovals.ask.subtitle": "默认提示策略。",
    "nodes.execApprovals.ask.subtitleAgent": "默认：{ask}。",
    "nodes.execApprovals.askFallback.title": "询问回退",
    "nodes.execApprovals.askFallback.subtitle": "当 UI 提示不可用时应用。",
    "nodes.execApprovals.askFallback.subtitleAgent": "默认：{fallback}。",
    "nodes.execApprovals.askFallback.fallback": "回退",
    "nodes.execApprovals.autoAllow.title": "自动允许技能 CLI",
    "nodes.execApprovals.autoAllow.subtitle": "允许网关列出的技能可执行文件。",
    "nodes.execApprovals.autoAllow.subtitleDefault": "使用默认值（{value}）。",
    "nodes.execApprovals.autoAllow.subtitleOverride": "覆盖（{value}）。",
    "nodes.execApprovals.allowlist.title": "允许列表",
    "nodes.execApprovals.allowlist.subtitle": "不区分大小写的 glob 模式。",
    "nodes.execApprovals.allowlist.addPattern": "添加模式",
    "nodes.execApprovals.allowlist.empty": "暂无允许列表条目。",
    "nodes.execApprovals.allowlist.pattern": "模式",
    "nodes.execApprovals.allowlist.newPattern": "新模式",
    "nodes.execApprovals.allowlist.lastUsed": "最后使用：",
    "nodes.execApprovals.allowlist.remove": "移除",
    "nodes.execApprovals.allowlist.useDefault": "使用默认值",
    "nodes.bindings.title": "执行节点绑定",
    "nodes.bindings.subtitle": "在使用 exec host=node 时将代理固定到特定节点。",
    "nodes.bindings.loadText": "加载配置以编辑绑定。",
    "nodes.bindings.loadConfig": "加载配置",
    "nodes.bindings.switchForm": "切换到配置标签页的<strong>表单</strong>模式以在此处编辑绑定。",
    "nodes.bindings.default.title": "默认绑定",
    "nodes.bindings.default.subtitle": "当代理不覆盖节点绑定时使用。",
    "nodes.bindings.default.node": "节点",
    "nodes.bindings.default.anyNode": "任意节点",
    "nodes.bindings.default.noNodes": "没有具有 system.run 的节点。",
    "nodes.bindings.agent.title": "代理",
    "nodes.bindings.agent.default": "默认代理",
    "nodes.bindings.agent.usesDefault": "使用默认值（{binding}）",
    "nodes.bindings.agent.override": "覆盖：{binding}",
    "nodes.bindings.agent.binding": "绑定",
    "nodes.bindings.agent.useDefault": "使用默认值",
    "nodes.bindings.noAgents": "未找到代理。",
    "nodes.devices.title": "设备",
    "nodes.devices.subtitle": "配对请求 + 角色令牌。",
    "nodes.devices.pending": "待处理",
    "nodes.devices.paired": "已配对",
    "nodes.devices.role": "角色：",
    "nodes.devices.requested": "请求于",
    "nodes.devices.repair": "· 修复",
    "nodes.devices.roles": "角色：",
    "nodes.devices.scopes": "作用域：",
    "nodes.devices.tokens": "令牌",
    "nodes.devices.tokensNone": "令牌：无",
    "nodes.devices.active": "活动",
    "nodes.devices.revoked": "已撤销",
    "nodes.devices.pairedStatus": "已配对",
    "nodes.devices.unpairedStatus": "未配对",
    "nodes.execApprovals.security.deny": "拒绝",
    "nodes.execApprovals.security.allowlist": "允许列表",
    "nodes.execApprovals.security.full": "完全",
    "nodes.execApprovals.ask.off": "关闭",
    "nodes.execApprovals.ask.onMiss": "未命中时",
    "nodes.execApprovals.ask.always": "始终",
    "nodes.execApprovals.target.gateway": "网关",
    // Config
    "config.title": "配置",
    "config.subtitle": "安全地编辑 ~/.clawdbot/moltbot.json。",
    "config.loading": "加载中…",
    "config.save": "保存",
    "config.apply": "应用",
    "config.reload": "重新加载",
    "config.mode.form": "表单",
    "config.mode.raw": "原始",
    "config.valid": "有效",
    "config.invalid": "无效",
    "config.saving": "保存中…",
    "config.applying": "应用中…",
    "config.search": "搜索",
    "config.settings": "设置",
    "config.unknown": "未知",
    "config.noChanges": "无更改",
    "config.search.placeholder": "搜索设置…",
    "config.allSettings": "所有设置",
    "config.all": "全部",
    "config.update": "更新",
    "config.updating": "更新中…",
    "config.unsavedChanges": "未保存的更改",
    "config.unsavedChange": "未保存的更改",
    "config.unsavedChangesPlural": "未保存的更改",
    "config.viewPendingChanges": "查看 {count} 个待处理更改",
    "config.viewPendingChange": "查看 1 个待处理更改",
    "config.viewPendingChangesPlural": "查看 {count} 个待处理更改",
    "config.loadingSchema": "加载架构中…",
    "config.formUnsafe": "表单视图无法安全编辑某些字段。使用原始模式以避免丢失配置条目。",
    "config.rawJson5": "原始 JSON5",
    // Debug
    "debug.title": "调试",
    "debug.subtitle": "网关快照、事件和手动 RPC 调用。",
    "debug.loading": "加载中…",
    "debug.refresh": "刷新",
    "debug.call.method": "方法",
    "debug.call.params": "参数",
    "debug.call.execute": "执行",
    "debug.call.result": "结果",
    "debug.call.error": "错误",
    "debug.noIssues": "无关键问题",
    "debug.snapshots.title": "快照",
    "debug.snapshots.subtitle": "状态、健康检查和心跳数据。",
    "debug.snapshots.status": "状态",
    "debug.snapshots.health": "健康",
    "debug.snapshots.heartbeat": "最后心跳",
    "debug.snapshots.securityAudit": "安全审计：{label}",
    "debug.snapshots.securityAuditInfo": " · {count} 信息",
    "debug.snapshots.securityAuditCommand": "运行 {command} 查看详情。",
    "debug.manualRpc.title": "手动 RPC",
    "debug.manualRpc.subtitle": "使用 JSON 参数发送原始网关方法。",
    "debug.manualRpc.method": "方法",
    "debug.manualRpc.params": "参数 (JSON)",
    "debug.manualRpc.call": "调用",
    "debug.models.title": "模型",
    "debug.models.subtitle": "来自 models.list 的目录。",
    "debug.eventLog.title": "事件日志",
    "debug.eventLog.subtitle": "最新的网关事件。",
    "debug.eventLog.empty": "暂无事件。",
    // Config form common
    "configForm.add": "添加",
    "configForm.addEntry": "添加条目",
    "configForm.removeItem": "删除项",
    "configForm.resetToDefault": "重置为默认值",
    "configForm.select": "选择...",
    "configForm.noItems": "暂无项。点击\"添加\"创建一个。",
    "configForm.items": "项",
    "configForm.item": "项",
    "configForm.customEntries": "自定义条目",
    "configForm.unsupportedArraySchema": "不支持的数组架构。使用原始模式。",
    "configForm.unsupportedType": "不支持的类型：{type}。使用原始模式。",
    "configForm.unsupportedSchemaNode": "不支持的架构节点。使用原始模式。",
    // Logs
    "logs.title": "日志",
    "logs.subtitle": "网关文件日志的实时跟踪。",
    "logs.loading": "加载中…",
    "logs.refresh": "刷新",
    "logs.filter": "筛选",
    "logs.autoFollow": "自动跟随",
    "logs.truncated": "已截断",
    "logs.empty": "暂无日志",
    "logs.lastUpdated": "最后更新：{timestamp}",
    "logs.search.placeholder": "搜索日志",
    "logs.card.title": "日志",
    "logs.card.subtitle": "网关文件日志（JSONL）。",
    "logs.export.filtered": "导出筛选",
    "logs.export.visible": "导出可见",
    "logs.file": "文件：",
    "logs.truncated.message": "日志输出已截断；显示最新块。",
    "logs.level.trace": "跟踪",
    "logs.level.debug": "调试",
    "logs.level.info": "信息",
    "logs.level.warn": "警告",
    "logs.level.error": "错误",
    "logs.level.fatal": "致命",
    // Skill descriptions
    "skill.description.1password": "设置和使用 1Password CLI (op)。在安装 CLI、启用桌面应用集成、登录（单账户或多账户）或需要访问 1Password 凭证时使用。",
    "skill.description.apple-notes": "通过 macOS 上的 'memo' CLI 管理 Apple Notes（创建、查看、编辑、删除、搜索、移动和导出笔记）。当用户要求 Moltbot 处理 Apple Notes 相关任务时使用。",
    "skill.description.apple-reminders": "通过 macOS 上的 'remindctl' CLI 管理 Apple Reminders（列出、添加、编辑、完成、删除）。支持列表、日期过滤和 JSON/纯文本输出。",
    "skill.description.bear-notes": "通过 macOS 上的 'bear' CLI 管理 Bear 笔记（创建、编辑、搜索、标记、归档、删除）。支持标签、链接和 Markdown 格式。",
    "skill.description.bird": "使用 X/Twitter CLI 通过 cookie 认证进行阅读、搜索、发帖和互动。",
    "skill.description.blogwatcher": "使用 blogwatcher CLI 监控博客和 RSS/Atom 源更新。",
    "skill.description.blucli": "BluOS CLI (blu) 用于发现、播放、分组和音量控制。",
    "skill.description.bluebubbles": "构建或更新 Moltbot 的 BlueBubbles 外部渠道插件（扩展包、REST 发送/探测、webhook 入站）。",
    "skill.description.camsnap": "从 RTSP/ONVIF 摄像头捕获帧或片段。",
    "skill.description.clawdhub": "使用 ClawdHub CLI 从 clawdhub.com 搜索、安装、更新和发布代理技能。当需要动态获取新技能、同步已安装技能到最新版本或特定版本，或发布新的/更新的技能文件夹时使用。",
    "skill.description.coding-agent": "通过后台进程运行 Codex CLI、Claude Code、OpenCode 或 Pi Coding Agent 以实现程序化控制。",
    "skill.description.trello": "通过 Trello REST API 管理 Trello 看板、列表和卡片。",
    "skill.description.video-frames": "使用 ffmpeg 从视频中提取帧或短片片段。",
    "skill.description.voice-call": "通过 Moltbot voice-call 插件启动语音通话。",
    "skill.description.wacli": "通过 wacli CLI 向其他人发送 WhatsApp 消息或搜索/同步 WhatsApp 历史记录（不用于普通用户聊天）。",
    "skill.description.weather": "获取当前天气和预报（无需 API 密钥）。",
    "skill.description.tmux": "通过发送按键和抓取窗格输出来远程控制 tmux 会话以进行交互式 CLI。",
    "skill.description.things-mac": "通过 macOS 上的 `things` CLI 管理 Things 3（通过 URL 方案添加/更新项目和待办事项；从本地 Things 数据库读取/搜索/列表）。当用户要求 Moltbot 向 Things 添加任务、列出收件箱/今天/即将到来、搜索任务或检查项目/区域/标签时使用。",
    "skill.description.summarize": "从 URL、播客和本地文件中总结或提取文本/转录（非常适合\"转录此 YouTube/视频\"的备用方案）。",
    "skill.description.sonoscli": "控制 Sonos 扬声器（发现/状态/播放/音量/分组）。",
    "skill.description.spotify-player": "通过 spogo（首选）或 spotify_player 进行终端 Spotify 播放/搜索。",
    "skill.description.songsee": "使用 songsee CLI 从音频生成频谱图和特征面板可视化。",
    "skill.description.slack": "当你需要通过 slack 工具从 Moltbot 控制 Slack 时使用，包括对消息做出反应或在 Slack 频道或私信中固定/取消固定项目。",
    "skill.description.skill-creator": "创建或更新 AgentSkills。在设计、构建或打包包含脚本、参考和资源的技能时使用。",
    "skill.description.sherpa-onnx-tts": "通过 sherpa-onnx 进行本地文本转语音（离线，无云端）。",
    "skill.description.session-logs": "使用 jq 搜索和分析你自己的会话日志（较旧的/父对话）。",
    "skill.description.sag": "使用 mac 风格的 say UX 进行 ElevenLabs 文本转语音。",
    "skill.description.ordercli": "仅限 Foodora 的 CLI，用于检查过去的订单和活动订单状态（Deliveroo 进行中）。",
    "skill.description.peekaboo": "使用 Peekaboo CLI 捕获和自动化 macOS UI。",
    "skill.description.openhue": "通过 OpenHue CLI 控制 Philips Hue 灯光/场景。",
    "skill.description.oracle": "使用 oracle CLI 的最佳实践（提示 + 文件打包、引擎、会话和文件附件模式）。",
    "skill.description.openai-whisper": "使用 Whisper CLI 进行本地语音转文本（无需 API 密钥）。",
    "skill.description.openai-whisper-api": "通过 OpenAI 音频转录 API（Whisper）转录音频。",
    "skill.description.openai-image-gen": "通过 OpenAI Images API 批量生成图像。随机提示采样器 + `index.html` 画廊。",
    "skill.description.notion": "Notion API，用于创建和管理页面、数据库和块。",
    "skill.description.obsidian": "使用 Obsidian 保险库（纯 Markdown 笔记）并通过 obsidian-cli 自动化。",
    "skill.description.nano-pdf": "使用 nano-pdf CLI 通过自然语言指令编辑 PDF。",
    "skill.description.nano-banana-pro": "通过 Gemini 3 Pro Image（Nano Banana Pro）生成或编辑图像。",
    "skill.description.model-usage": "使用 CodexBar CLI 本地成本使用情况来总结 Codex 或 Claude 的每个模型使用情况，包括当前（最新）模型或完整的模型分解。当被要求从 codexbar 获取模型级别的使用/成本数据时触发，或当你需要从 codexbar 成本 JSON 获取可脚本化的每个模型摘要时使用。",
    "skill.description.mcporter": "使用 mcporter CLI 列出、配置、认证并直接调用 MCP 服务器/工具（HTTP 或 stdio），包括临时服务器、配置编辑和 CLI/类型生成。",
    "skill.description.local-places": "通过 localhost 上的 Google Places API 代理搜索地点（餐厅、咖啡馆等）。",
    "skill.description.imsg": "iMessage/SMS CLI，用于列出聊天、历史记录、监视和发送。",
    "skill.description.himalaya": "通过 IMAP/SMTP 管理电子邮件的 CLI。使用 `himalaya` 从终端列出、读取、编写、回复、转发、搜索和组织电子邮件。支持多个账户和使用 MML（MIME 元语言）的消息编写。",
    "skill.description.goplaces": "通过 goplaces CLI 查询 Google Places API（新版本）进行文本搜索、地点详情、解析和评论。用于人性化的地点查找或脚本的 JSON 输出。",
    "skill.description.gog": "Google Workspace CLI，用于 Gmail、Calendar、Drive、Contacts、Sheets 和 Docs。",
    "skill.description.github": "使用 `gh` CLI 与 GitHub 交互。使用 `gh issue`、`gh pr`、`gh run` 和 `gh api` 处理问题、PR、CI 运行和高级查询。",
    "skill.description.gemini": "Gemini CLI，用于一次性问答、摘要和生成。",
    "skill.description.gifgrep": "使用 CLI/TUI 搜索 GIF 提供商，下载结果并提取静态图像/表格。",
    "skill.description.eightctl": "控制 Eight Sleep pods（状态、温度、闹钟、时间表）。",
    "skill.description.food-order": "重新订购 Foodora 订单 + 使用 ordercli 跟踪 ETA/状态。未经明确用户批准绝不确认。触发器：订购食物、重新订购、跟踪 ETA。",
    "skill.description.discord": "当你需要通过 discord 工具从 Moltbot 控制 Discord 时使用：发送消息、反应、发布或上传贴纸、上传表情符号、运行投票、管理线程/固定/搜索、创建/编辑/删除频道和类别、获取权限或成员/角色/频道信息，或在 Discord 私信或频道中处理审核操作。",
    // Exec approval
    "execApproval.title": "执行审批",
    "execApproval.allowOnce": "允许一次",
    "execApproval.allowAlways": "始终允许",
    "execApproval.deny": "拒绝",
    "execApproval.request": "请求",
    // Theme
    "theme.system": "系统",
    "theme.light": "浅色",
    "theme.dark": "深色",
    // Locale
    "locale.zh": "中文",
    "locale.en": "English",
  },
  en: {
    // Navigation groups
    "nav.group.chat": "Chat",
    "nav.group.control": "Control",
    "nav.group.agent": "Agent",
    "nav.group.settings": "Settings",
    // Tab titles
    "tab.overview.title": "Overview",
    "tab.channels.title": "Channels",
    "tab.instances.title": "Instances",
    "tab.sessions.title": "Sessions",
    "tab.cron.title": "Cron Jobs",
    "tab.skills.title": "Skills",
    "tab.nodes.title": "Nodes",
    "tab.chat.title": "Chat",
    "tab.config.title": "Config",
    "tab.debug.title": "Debug",
    "tab.logs.title": "Logs",
    // Tab subtitles
    "tab.overview.subtitle": "Gateway status, entry points, and a fast health read.",
    "tab.channels.subtitle": "Manage channels and settings.",
    "tab.instances.subtitle": "Presence beacons from connected clients and nodes.",
    "tab.sessions.subtitle": "Inspect active sessions and adjust per-session defaults.",
    "tab.cron.subtitle": "Schedule wakeups and recurring agent runs.",
    "tab.skills.subtitle": "Manage skill availability and API key injection.",
    "tab.nodes.subtitle": "Paired devices, capabilities, and command exposure.",
    "tab.chat.subtitle": "Direct gateway chat session for quick interventions.",
    "tab.config.subtitle": "Edit ~/.clawdbot/moltbot.json safely.",
    "tab.debug.subtitle": "Gateway snapshots, events, and manual RPC calls.",
    "tab.logs.subtitle": "Live tail of the gateway file logs.",
    // Brand
    "brand.subtitle": "Gateway Dashboard",
    // Status
    "status.health": "Health",
    "status.ok": "OK",
    "status.offline": "Offline",
    // Resources
    "nav.resources": "Resources",
    "nav.docs": "Docs",
    "nav.docs.tooltip": "Docs (opens in new tab)",
    // Common
    "common.loading": "Loading…",
    "common.refresh": "Refresh",
    "common.saving": "Saving…",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.connect": "Connect",
    "common.disconnect": "Disconnect",
    "common.close": "Close",
    "common.open": "Open",
    "common.edit": "Edit",
    "common.add": "Add",
    "common.remove": "Remove",
    "common.enable": "Enable",
    "common.disable": "Disable",
    "common.enabled": "Enabled",
    "common.disabled": "Disabled",
    "common.yes": "Yes",
    "common.no": "No",
    "common.any": "any",
    "common.ok": "OK",
    "common.error": "Error",
    "common.success": "Success",
    "common.warning": "Warning",
    "common.info": "Info",
    // Sidebar
    "sidebar.expand": "Expand sidebar",
    "sidebar.collapse": "Collapse sidebar",
    // Overview
    "overview.title": "Overview",
    "overview.subtitle": "Gateway status, entry points, and a fast health read.",
    "overview.connect.button": "Connect",
    "overview.refresh.button": "Refresh",
    "overview.uptime": "Uptime",
    "overview.tick": "Tick",
    "overview.presence.count": "Presence",
    "overview.sessions.count": "Sessions",
    "overview.cron.enabled": "Cron enabled",
    "overview.cron.disabled": "Cron disabled",
    "overview.cron.next": "Next run",
    "overview.channels.lastRefresh": "Last refresh",
    "overview.auth.hint.noAuth": "This gateway requires auth. Add a token or password, then click Connect.",
    "overview.auth.hint.failed": "Auth failed. Re-copy a tokenized URL with moltbot dashboard --no-open, or update the token, then click Connect.",
    "overview.auth.hint.docs": "Docs: Control UI auth",
    "overview.insecure.hint": "This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open http://127.0.0.1:18789 on the gateway host.",
    "overview.insecure.allowInsecure": "If you must stay on HTTP, set gateway.controlUi.allowInsecureAuth: true (token-only).",
    "overview.insecure.docs": "Docs: Tailscale",
    "overview.gatewayUrl.label": "Gateway URL",
    "overview.token.label": "Token",
    "overview.password.label": "Password",
    "overview.sessionKey.label": "Session Key",
    "overview.gatewayAccess.title": "Gateway Access",
    "overview.gatewayAccess.subtitle": "Where the dashboard connects and how it authenticates.",
    "overview.snapshot.title": "Snapshot",
    "overview.snapshot.subtitle": "Latest gateway handshake information.",
    "overview.snapshot.status": "Status",
    "overview.snapshot.hint": "Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.",
    "overview.notes.title": "Notes",
    "overview.notes.subtitle": "Quick reminders for remote control setups.",
    "overview.notes.tailscale.title": "Tailscale serve",
    "overview.notes.tailscale.desc": "Prefer serve mode to keep the gateway on loopback with tailnet auth.",
    "overview.notes.hygiene.title": "Session hygiene",
    "overview.notes.hygiene.desc": "Use /new or sessions.patch to reset context.",
    "overview.notes.cron.title": "Cron reminders",
    "overview.notes.cron.desc": "Use isolated sessions for recurring runs.",
    // Chat
    "chat.send": "Send",
    "chat.abort": "Abort",
    "chat.placeholder": "Type a message…",
    "chat.refresh": "Refresh",
    "chat.compacting": "Compacting context...",
    "chat.compacted": "Context compacted",
    "chat.thinking.toggle": "Toggle assistant thinking/working output",
    "chat.focus.toggle": "Toggle focus mode (hide sidebar + page header)",
    "chat.focus.toggle.disabled": "Disabled during onboarding",
    "chat.thinking.toggle.disabled": "Disabled during onboarding",
    "chat.refresh.tooltip": "Refresh chat history",
    "chat.disconnected": "Disconnected from gateway.",
    "chat.empty": "No messages yet. Send a message to start a conversation.",
    "chat.queue.title": "Queue",
    "chat.queue.empty": "Queue is empty",
    "chat.queue.remove": "Remove",
    "chat.queue.clear": "Clear",
    "chat.newSession": "New Session",
    "chat.history.truncated": "Showing last {limit} messages ({hidden} hidden).",
    "chat.attachment.preview": "Attachment preview",
    "chat.attachment.remove": "Remove attachment",
    "chat.focus.exit": "Exit focus mode",
    "chat.queue.removeItem": "Remove queued message",
    // Channels additional
    "channels.health.title": "Channel health",
    "channels.health.subtitle": "Channel status snapshots from the gateway.",
    "channels.health.noSnapshot": "No snapshot yet.",
    "channels.status.configured": "Configured",
    "channels.status.linked": "Linked",
    "channels.status.running": "Running",
    "channels.status.mode": "Mode",
    "channels.status.lastConnect": "Last connect",
    "channels.status.lastMessage": "Last message",
    "channels.status.authAge": "Auth age",
    "channels.status.lastStart": "Last start",
    "channels.status.lastProbe": "Last probe",
    "channels.status.lastInbound": "Last inbound",
    "channels.status.credential": "Credential",
    "channels.status.audience": "Audience",
    "channels.whatsapp.subtitle": "Link WhatsApp Web and monitor connection health.",
    "channels.whatsapp.showQr": "Show QR",
    "channels.whatsapp.working": "Working…",
    "channels.whatsapp.relink": "Relink",
    "channels.whatsapp.waitScan": "Wait for scan",
    "channels.whatsapp.logout": "Logout",
    "channels.whatsapp.qrAlt": "WhatsApp QR",
    "channels.telegram.subtitle": "Bot status and channel configuration.",
    "channels.telegram.blurb": "simplest way to get started — register a bot with @BotFather and get going.",
    "channels.telegram.probe": "Probe",
    "channels.telegram.probeOk": "ok",
    "channels.telegram.probeFailed": "failed",
    "channels.telegram.field.accounts": "Accounts",
    "channels.telegram.field.actions": "Actions",
    "channels.telegram.field.deleteMessage": "Delete Message",
    "channels.telegram.field.reactions": "Reactions",
    "channels.telegram.field.sendMessage": "Send Message",
    "channels.telegram.field.sticker": "Sticker",
    "channels.telegram.field.allowFrom": "Allow From",
    "channels.telegram.field.groupPolicy": "Group Policy",
    "channels.telegram.field.dmPolicy": "DM Policy",
    "channels.telegram.field.groupAllowFrom": "Group Allow From",
    "channels.telegram.field.groups": "Groups",
    "channels.telegram.field.enabled": "Enabled",
    "channels.telegram.field.botToken": "Bot Token",
    "channels.telegram.field.requireMention": "Require Mention",
    "channels.telegram.field.customCommands": "Custom Commands",
    "channels.telegram.field.streamMode": "Stream Mode",
    "channels.telegram.field.draftChunk": "Draft Chunk",
    "channels.telegram.field.retry": "Retry",
    "channels.telegram.field.network": "Network",
    "channels.telegram.field.timeoutSeconds": "Timeout (seconds)",
    "channels.telegram.field.capabilities": "Capabilities",
    "channels.telegram.field.inlineButtons": "Inline Buttons",
    "channels.telegram.field.blockStreaming": "Block Streaming",
    "channels.telegram.field.blockStreamingCoalesce": "Block Streaming Coalesce",
    "channels.telegram.field.idleMs": "Idle Ms",
    "channels.telegram.field.maxChars": "Max Chars",
    "channels.telegram.field.minChars": "Min Chars",
    "channels.telegram.field.chunkMode": "Chunk Mode",
    "channels.telegram.field.length": "length",
    "channels.telegram.field.newline": "newline",
    "channels.telegram.field.commands": "Commands",
    "channels.telegram.field.native": "Native",
    "channels.telegram.field.nativeSkills": "Native Skills",
    "channels.telegram.field.configWrites": "Config Writes",
    "channels.telegram.field.dmHistoryLimit": "Dm History Limit",
    "channels.telegram.field.dms": "Dms",
    "channels.telegram.field.replyToMode": "Reply To Mode",
    "channels.telegram.field.off": "off",
    "channels.telegram.field.first": "first",
    "channels.telegram.field.all": "all",
    "channels.telegram.field.attempts": "Attempts",
    "channels.telegram.field.jitter": "Jitter",
    "channels.telegram.field.maxDelayMs": "Max Delay (ms)",
    "channels.telegram.field.minDelayMs": "Min Delay (ms)",
    "channels.telegram.field.breakPreference": "Break Preference",
    "channels.telegram.field.paragraph": "paragraph",
    "channels.telegram.field.sentence": "sentence",
    "channels.telegram.field.partial": "partial",
    "channels.telegram.field.block": "block",
    "channels.telegram.field.reactionNotifications": "Reaction Notifications",
    "channels.telegram.field.own": "own",
    "channels.telegram.field.textChunkLimit": "Text Chunk Limit",
    "channels.telegram.field.tokenFile": "Token File",
    "channels.telegram.field.webhookPath": "Webhook Path",
    "channels.telegram.field.webhookSecret": "Webhook Secret",
    "channels.telegram.field.webhookUrl": "Webhook Url",
    "channels.telegram.field.useIndicator": "Use Indicator",
    "channels.telegram.field.historyLimit": "History Limit",
    "channels.telegram.field.linkPreview": "Link Preview",
    "channels.telegram.field.markdown": "Markdown",
    "channels.telegram.field.tables": "Tables",
    "channels.telegram.field.mediaMaxMb": "Media Max Mb",
    "channels.telegram.field.bullets": "bullets",
    "channels.telegram.field.code": "code",
    "channels.telegram.field.pairing": "pairing",
    "channels.telegram.field.allowlist": "allowlist",
    "channels.telegram.field.open": "open",
    "channels.telegram.field.disabled": "disabled",
    "channels.telegram.field.ack": "ack",
    "channels.telegram.field.minimal": "minimal",
    "channels.telegram.field.extensive": "extensive",
    "channels.telegram.field.draftChunk.minChars": "Telegram Draft Chunk Min Chars",
    "channels.telegram.field.draftChunk.maxChars": "Telegram Draft Chunk Max Chars",
    "channels.telegram.field.draftChunk.breakPreference": "Telegram Draft Chunk Break Preference",
    "channels.telegram.field.retry.attempts": "Telegram Retry Attempts",
    "channels.telegram.field.retry.minDelayMs": "Telegram Retry Min Delay (ms)",
    "channels.telegram.field.retry.maxDelayMs": "Telegram Retry Max Delay (ms)",
    "channels.telegram.field.retry.jitter": "Telegram Retry Jitter",
    "channels.telegram.field.network.autoSelectFamily": "Telegram autoSelectFamily",
    "channels.telegram.field.capabilities.inlineButtons": "Telegram Inline Buttons",
    "config.field.update.checkOnStart": "Update Check on Start",
    "config.field.diagnostics.cacheTrace": "Cache Trace",
    "config.field.diagnostics.cacheTrace.enabled": "Cache Trace Enabled",
    "config.field.diagnostics.cacheTrace.filePath": "Cache Trace File Path",
    "config.field.diagnostics.cacheTrace.includeMessages": "Cache Trace Include Messages",
    "config.field.diagnostics.cacheTrace.includePrompt": "Cache Trace Include Prompt",
    "config.field.diagnostics.cacheTrace.includeSystem": "Cache Trace Include System",
    "config.field.meta.lastTouchedVersion": "Config Last Touched Version",
    "config.field.meta.lastTouchedAt": "Config Last Touched At",
    "config.field.update.channel": "Update Channel",
    "config.field.diagnostics.enabled": "Diagnostics Enabled",
    "config.field.diagnostics.flags": "Diagnostics Flags",
    "config.field.diagnostics.otel.enabled": "OpenTelemetry Enabled",
    "config.field.diagnostics.otel.endpoint": "OpenTelemetry Endpoint",
    "config.field.diagnostics.otel.protocol": "OpenTelemetry Protocol",
    "config.field.diagnostics.otel.headers": "OpenTelemetry Headers",
    "config.field.diagnostics.otel.serviceName": "OpenTelemetry Service Name",
    "config.field.diagnostics.otel.traces": "OpenTelemetry Traces Enabled",
    "config.field.diagnostics.otel.metrics": "OpenTelemetry Metrics Enabled",
    "config.field.diagnostics.otel.logs": "OpenTelemetry Logs Enabled",
    "config.field.diagnostics.otel.sampleRate": "OpenTelemetry Trace Sample Rate",
    "config.field.diagnostics.otel.flushIntervalMs": "OpenTelemetry Flush Interval (ms)",
    "config.field.gateway.remote.url": "Remote Gateway URL",
    "config.field.gateway.remote.sshTarget": "Remote Gateway SSH Target",
    "config.field.gateway.remote.sshIdentity": "Remote Gateway SSH Identity",
    "config.field.gateway.remote.token": "Remote Gateway Token",
    "config.field.gateway.remote.password": "Remote Gateway Password",
    "config.field.gateway.remote.tlsFingerprint": "Remote Gateway TLS Fingerprint",
    "config.field.gateway.auth.token": "Gateway Token",
    "config.field.gateway.auth.password": "Gateway Password",
    "config.field.gateway.controlUi.basePath": "Control UI Base Path",
    "config.field.gateway.controlUi.allowInsecureAuth": "Allow Insecure Control UI Auth",
    "config.field.gateway.controlUi.dangerouslyDisableDeviceAuth": "Dangerously Disable Control UI Device Auth",
    "config.field.gateway.http.endpoints.chatCompletions.enabled": "OpenAI Chat Completions Endpoint",
    "config.field.gateway.reload.mode": "Config Reload Mode",
    "config.field.gateway.reload.debounceMs": "Config Reload Debounce (ms)",
    "config.field.gateway.nodes.browser.mode": "Gateway Node Browser Mode",
    "config.field.gateway.nodes.browser.node": "Gateway Node Browser Pin",
    "config.field.gateway.nodes.allowCommands": "Gateway Node Allowlist (Extra Commands)",
    "config.field.gateway.nodes.denyCommands": "Gateway Node Denylist",
    "config.field.tools.media.image.enabled": "Enable Image Understanding",
    "config.field.tools.media.image.maxBytes": "Image Understanding Max Bytes",
    "config.field.tools.media.image.maxChars": "Image Understanding Max Chars",
    "config.field.tools.media.image.prompt": "Image Understanding Prompt",
    "config.field.tools.media.image.timeoutSeconds": "Image Understanding Timeout (sec)",
    "config.field.tools.media.image.attachments": "Image Understanding Attachment Policy",
    "config.field.tools.media.image.models": "Image Understanding Models",
    "config.field.tools.media.image.scope": "Image Understanding Scope",
    "config.field.tools.media.models": "Media Understanding Shared Models",
    "config.field.tools.media.concurrency": "Media Understanding Concurrency",
    "config.field.tools.media.audio.enabled": "Enable Audio Understanding",
    "config.field.tools.media.audio.maxBytes": "Audio Understanding Max Bytes",
    "config.field.tools.media.audio.maxChars": "Audio Understanding Max Chars",
    "config.field.tools.media.audio.prompt": "Audio Understanding Prompt",
    "config.field.tools.media.audio.timeoutSeconds": "Audio Understanding Timeout (sec)",
    "config.field.tools.media.audio.language": "Audio Understanding Language",
    "config.field.tools.media.audio.attachments": "Audio Understanding Attachment Policy",
    "config.field.tools.media.audio.models": "Audio Understanding Models",
    "config.field.tools.media.audio.scope": "Audio Understanding Scope",
    "config.field.tools.media.video.enabled": "Enable Video Understanding",
    "config.field.tools.media.video.maxBytes": "Video Understanding Max Bytes",
    "config.field.tools.media.video.maxChars": "Video Understanding Max Chars",
    "config.field.tools.media.video.prompt": "Video Understanding Prompt",
    "config.field.tools.media.video.timeoutSeconds": "Video Understanding Timeout (sec)",
    "config.field.tools.media.video.attachments": "Video Understanding Attachment Policy",
    "config.field.tools.media.video.models": "Video Understanding Models",
    "config.field.tools.media.video.scope": "Video Understanding Scope",
    "config.field.tools.links.enabled": "Enable Link Understanding",
    "config.field.tools.links.maxLinks": "Link Understanding Max Links",
    "config.field.tools.links.timeoutSeconds": "Link Understanding Timeout (sec)",
    "config.field.tools.links.models": "Link Understanding Models",
    "config.field.tools.links.scope": "Link Understanding Scope",
    "config.field.tools.profile": "Tool Profile",
    "config.field.tools.alsoAllow": "Tool Allowlist Additions",
    "config.field.tools.byProvider": "Tool Policy by Provider",
    "config.field.tools.exec.applyPatch.enabled": "Enable apply_patch",
    "config.field.tools.exec.applyPatch.allowModels": "apply_patch Model Allowlist",
    "config.field.tools.exec.notifyOnExit": "Exec Notify On Exit",
    "config.field.tools.exec.approvalRunningNoticeMs": "Exec Approval Running Notice (ms)",
    "config.field.tools.exec.host": "Exec Host",
    "config.field.tools.exec.security": "Exec Security",
    "config.field.tools.exec.ask": "Exec Ask",
    "config.field.tools.exec.node": "Exec Node Binding",
    "config.field.tools.exec.pathPrepend": "Exec PATH Prepend",
    "config.field.tools.exec.safeBins": "Exec Safe Bins",
    "config.field.tools.message.allowCrossContextSend": "Allow Cross-Context Messaging",
    "config.field.tools.message.crossContext.allowWithinProvider": "Allow Cross-Context (Same Provider)",
    "config.field.tools.message.crossContext.allowAcrossProviders": "Allow Cross-Context (Across Providers)",
    "config.field.tools.message.crossContext.marker.enabled": "Cross-Context Marker",
    "config.field.tools.message.crossContext.marker.prefix": "Cross-Context Marker Prefix",
    "config.field.tools.message.crossContext.marker.suffix": "Cross-Context Marker Suffix",
    "config.field.tools.message.broadcast.enabled": "Enable Message Broadcast",
    "config.field.tools.web.search.enabled": "Enable Web Search Tool",
    "config.field.tools.web.search.provider": "Web Search Provider",
    "config.field.tools.web.search.apiKey": "Brave Search API Key",
    "config.field.tools.web.search.maxResults": "Web Search Max Results",
    "config.field.tools.web.search.timeoutSeconds": "Web Search Timeout (sec)",
    "config.field.tools.web.search.cacheTtlMinutes": "Web Search Cache TTL (min)",
    "config.field.tools.web.fetch.enabled": "Enable Web Fetch Tool",
    "config.field.tools.web.fetch.maxChars": "Web Fetch Max Chars",
    "config.field.tools.web.fetch.timeoutSeconds": "Web Fetch Timeout (sec)",
    "config.field.tools.web.fetch.cacheTtlMinutes": "Web Fetch Cache TTL (min)",
    "config.field.tools.web.fetch.maxRedirects": "Web Fetch Max Redirects",
    "config.field.tools.web.fetch.userAgent": "Web Fetch User-Agent",
    "config.field.agents.defaults.workspace": "Workspace",
    "config.field.agents.defaults.repoRoot": "Repo Root",
    "config.field.agents.defaults.bootstrapMaxChars": "Bootstrap Max Chars",
    "config.field.agents.defaults.envelopeTimezone": "Envelope Timezone",
    "config.field.agents.defaults.envelopeTimestamp": "Envelope Timestamp",
    "config.field.agents.defaults.envelopeElapsed": "Envelope Elapsed",
    "config.field.agents.defaults.memorySearch": "Memory Search",
    "config.field.agents.defaults.memorySearch.enabled": "Enable Memory Search",
    "config.field.agents.defaults.memorySearch.sources": "Memory Search Sources",
    "config.field.agents.defaults.memorySearch.experimental.sessionMemory": "Memory Search Session Index (Experimental)",
    "config.field.agents.defaults.memorySearch.provider": "Memory Search Provider",
    "config.field.agents.defaults.memorySearch.remote.baseUrl": "Remote Embedding Base URL",
    "config.field.agents.defaults.memorySearch.remote.apiKey": "Remote Embedding API Key",
    "config.field.agents.defaults.memorySearch.remote.headers": "Remote Embedding Headers",
    "config.field.agents.defaults.memorySearch.remote.batch.concurrency": "Remote Batch Concurrency",
    "config.field.agents.defaults.memorySearch.model": "Memory Search Model",
    "config.field.agents.defaults.memorySearch.fallback": "Memory Search Fallback",
    "config.field.agents.defaults.memorySearch.local.modelPath": "Local Embedding Model Path",
    "config.field.agents.defaults.memorySearch.store.path": "Memory Search Index Path",
    "config.field.agents.defaults.memorySearch.store.vector.enabled": "Memory Search Vector Index",
    "config.field.agents.defaults.memorySearch.store.vector.extensionPath": "Memory Search Vector Extension Path",
    "config.field.agents.defaults.memorySearch.chunking.tokens": "Memory Chunk Tokens",
    "config.field.agents.defaults.memorySearch.chunking.overlap": "Memory Chunk Overlap Tokens",
    "config.field.agents.defaults.memorySearch.sync.onSessionStart": "Index on Session Start",
    "config.field.agents.defaults.memorySearch.sync.onSearch": "Index on Search (Lazy)",
    "config.field.agents.defaults.memorySearch.sync.watch": "Watch Memory Files",
    "config.field.agents.defaults.memorySearch.sync.watchDebounceMs": "Memory Watch Debounce (ms)",
    "config.field.agents.defaults.memorySearch.sync.sessions.deltaBytes": "Session Delta Bytes",
    "config.field.agents.defaults.memorySearch.sync.sessions.deltaMessages": "Session Delta Messages",
    "config.field.agents.defaults.memorySearch.query.maxResults": "Memory Search Max Results",
    "config.field.agents.defaults.memorySearch.query.minScore": "Memory Search Min Score",
    "config.field.agents.defaults.memorySearch.query.hybrid.enabled": "Memory Search Hybrid",
    "config.field.agents.defaults.memorySearch.query.hybrid.vectorWeight": "Memory Search Vector Weight",
    "config.field.agents.defaults.memorySearch.query.hybrid.textWeight": "Memory Search Text Weight",
    "config.field.agents.defaults.memorySearch.query.hybrid.candidateMultiplier": "Memory Search Hybrid Candidate Multiplier",
    "config.field.agents.defaults.memorySearch.cache.enabled": "Memory Search Embedding Cache",
    "config.field.agents.defaults.memorySearch.cache.maxEntries": "Memory Search Embedding Cache Max Entries",
    "config.field.agents.defaults.models": "Models",
    "config.field.agents.defaults.model.primary": "Primary Model",
    "config.field.agents.defaults.model.fallbacks": "Model Fallbacks",
    "config.field.agents.defaults.imageModel.primary": "Image Model",
    "config.field.agents.defaults.imageModel.fallbacks": "Image Model Fallbacks",
    "config.field.agents.defaults.humanDelay.mode": "Human Delay Mode",
    "config.field.agents.defaults.humanDelay.minMs": "Human Delay Min (ms)",
    "config.field.agents.defaults.humanDelay.maxMs": "Human Delay Max (ms)",
    "config.field.agents.defaults.cliBackends": "CLI Backends",
    "config.field.auth.profiles": "Auth Profiles",
    "config.field.auth.order": "Auth Profile Order",
    "config.field.auth.cooldowns.billingBackoffHours": "Billing Backoff (hours)",
    "config.field.auth.cooldowns.billingBackoffHoursByProvider": "Billing Backoff Overrides",
    "config.field.auth.cooldowns.billingMaxHours": "Billing Backoff Cap (hours)",
    "config.field.auth.cooldowns.failureWindowHours": "Failover Window (hours)",
    "config.field.commands.native": "Native Commands",
    "config.field.commands.nativeSkills": "Native Skill Commands",
    "config.field.commands.text": "Text Commands",
    "config.field.commands.bash": "Allow Bash Chat Command",
    "config.field.commands.bashForegroundMs": "Bash Foreground Window (ms)",
    "config.field.commands.config": "Allow /config",
    "config.field.commands.debug": "Allow /debug",
    "config.field.commands.restart": "Allow Restart",
    "config.field.commands.useAccessGroups": "Use Access Groups",
    "config.field.ui.seamColor": "Accent Color",
    "config.field.ui.assistant.name": "Assistant Name",
    "config.field.ui.assistant.avatar": "Assistant Avatar",
    "config.field.browser.evaluateEnabled": "Browser Evaluate Enabled",
    "config.field.browser.snapshotDefaults": "Browser Snapshot Defaults",
    "config.field.browser.snapshotDefaults.mode": "Browser Snapshot Mode",
    "config.field.browser.remoteCdpTimeoutMs": "Remote CDP Timeout (ms)",
    "config.field.browser.remoteCdpHandshakeTimeoutMs": "Remote CDP Handshake Timeout (ms)",
    "config.field.session.dmScope": "DM Session Scope",
    "config.field.session.agentToAgent.maxPingPongTurns": "Agent-to-Agent Ping-Pong Turns",
    "config.field.messages.ackReaction": "Ack Reaction Emoji",
    "config.field.messages.ackReactionScope": "Ack Reaction Scope",
    "config.field.messages.inbound.debounceMs": "Inbound Message Debounce (ms)",
    "config.field.talk.apiKey": "Talk API Key",
    "config.field.skills.load.watch": "Watch Skills",
    "config.field.skills.load.watchDebounceMs": "Skills Watch Debounce (ms)",
    "config.field.plugins.enabled": "Enable Plugins",
    "config.field.plugins.allow": "Plugin Allowlist",
    "config.field.plugins.deny": "Plugin Denylist",
    "config.field.plugins.load.paths": "Plugin Load Paths",
    "config.field.plugins.slots": "Plugin Slots",
    "config.field.plugins.slots.memory": "Memory Plugin",
    "config.field.plugins.entries": "Plugin Entries",
    "config.field.discovery.mdns.mode": "mDNS Discovery Mode",
    "config.field.nodeHost.browserProxy.enabled": "Node Browser Proxy Enabled",
    "config.field.nodeHost.browserProxy.allowProfiles": "Node Browser Proxy Allowed Profiles",
    "config.field.agents.list.identity.avatar": "Agent Avatar",
    "config.field.agents.list.tools.profile": "Agent Tool Profile",
    "config.field.agents.list.tools.alsoAllow": "Agent Tool Allowlist Additions",
    "config.field.agents.list.tools.byProvider": "Agent Tool Policy by Provider",
    "config.field.plugins.entries.enabled": "Plugin Enabled",
    "config.field.plugins.entries.config": "Plugin Config",
    "config.field.plugins.installs.source": "Plugin Install Source",
    "config.field.plugins.installs.spec": "Plugin Install Spec",
    "config.field.plugins.installs.sourcePath": "Plugin Install Source Path",
    "config.field.plugins.installs.installPath": "Plugin Install Path",
    "config.field.plugins.installs.version": "Plugin Install Version",
    "config.field.plugins.installs.installedAt": "Plugin Install Time",
    "channels.discord.field.accounts": "Accounts",
    "channels.discord.field.actions": "Actions",
    "channels.discord.field.dm": "DM",
    "channels.discord.field.guilds": "Guilds",
    "channels.discord.field.token": "Token",
    "channels.discord.field.enabled": "Enabled",
    "channels.discord.field.groupPolicy": "Group Policy",
    "channels.discord.field.groupAllowFrom": "Group Allow From",
    "channels.discord.field.allowFrom": "Allow From",
    "channels.discord.field.requireMention": "Require Mention",
    "channels.discord.field.channels": "Channels",
    "channels.discord.field.slashCommand": "Slash Command",
    "channels.whatsapp.field.accounts": "Accounts",
    "channels.whatsapp.field.actions": "Actions",
    "channels.whatsapp.field.dmPolicy": "DM Policy",
    "channels.whatsapp.field.groupPolicy": "Group Policy",
    "channels.whatsapp.field.allowFrom": "Allow From",
    "channels.whatsapp.field.groupAllowFrom": "Group Allow From",
    "channels.whatsapp.field.groups": "Groups",
    "channels.whatsapp.field.enabled": "Enabled",
    "channels.whatsapp.field.selfChatMode": "Self Chat Mode",
    "channels.whatsapp.field.debounceMs": "Debounce (ms)",
    "channels.slack.field.accounts": "Accounts",
    "channels.slack.field.actions": "Actions",
    "channels.slack.field.dm": "DM",
    "channels.slack.field.channels": "Channels",
    "channels.slack.field.guilds": "Workspaces",
    "channels.slack.field.botToken": "Bot Token",
    "channels.slack.field.appToken": "App Token",
    "channels.slack.field.userToken": "User Token",
    "channels.slack.field.enabled": "Enabled",
    "channels.slack.field.groupPolicy": "Group Policy",
    "channels.slack.field.allowFrom": "Allow From",
    "channels.slack.field.requireMention": "Require Mention",
    "channels.slack.field.slashCommand": "Slash Command",
    "channels.signal.field.accounts": "Accounts",
    "channels.signal.field.actions": "Actions",
    "channels.signal.field.dmPolicy": "DM Policy",
    "channels.signal.field.groupPolicy": "Group Policy",
    "channels.signal.field.allowFrom": "Allow From",
    "channels.signal.field.groupAllowFrom": "Group Allow From",
    "channels.signal.field.groups": "Groups",
    "channels.signal.field.enabled": "Enabled",
    "channels.signal.field.account": "Account",
    "channels.signal.field.baseUrl": "Base URL",
    "channels.imessage.field.accounts": "Accounts",
    "channels.imessage.field.actions": "Actions",
    "channels.imessage.field.dmPolicy": "DM Policy",
    "channels.imessage.field.groupPolicy": "Group Policy",
    "channels.imessage.field.allowFrom": "Allow From",
    "channels.imessage.field.groupAllowFrom": "Group Allow From",
    "channels.imessage.field.groups": "Groups",
    "channels.imessage.field.enabled": "Enabled",
    "channels.imessage.field.cliPath": "CLI Path",
    "channels.googlechat.field.accounts": "Accounts",
    "channels.googlechat.field.actions": "Actions",
    "channels.googlechat.field.enabled": "Enabled",
    "channels.googlechat.field.credential": "Credential",
    "channels.googlechat.field.audience": "Audience",
    "channels.discord.subtitle": "Bot status and channel configuration.",
    "channels.googlechat.subtitle": "Chat API webhook status and channel configuration.",
    "channels.config.schemaUnavailable": "Schema unavailable. Use Raw.",
    "channels.config.channelSchemaUnavailable": "Channel config schema unavailable.",
    "channels.config.loading": "Loading config schema…",
    "channels.config.reload": "Reload",
    "channels.accounts.count": "Accounts ({count})",
    "channels.signal.subtitle": "signal-cli status and channel configuration.",
    "channels.signal.baseUrl": "Base URL",
    "channels.slack.subtitle": "Socket mode status and channel configuration.",
    "channels.imessage.subtitle": "macOS bridge status and channel configuration.",
    // Channels
    "channels.refresh": "Refresh",
    "channels.loading": "Loading…",
    "channels.error": "Error",
    "channels.lastRefresh": "Last refresh",
    "channels.status.connected": "Connected",
    "channels.status.disconnected": "Disconnected",
    "channels.status.error": "Error",
    // Instances
    "instances.title": "Instances",
    "instances.subtitle": "Presence beacons from connected clients and nodes.",
    "instances.loading": "Loading…",
    "instances.empty": "No instances",
    "instances.refresh": "Refresh",
    "instances.card.title": "Connected Instances",
    "instances.card.subtitle": "Presence beacons from the gateway and clients.",
    "instances.unknownHost": "unknown host",
    "instances.lastInput": "Last input",
    "instances.reason": "Reason",
    "instances.scopes": "scopes",
    // Sessions
    "sessions.title": "Sessions",
    "sessions.subtitle": "Inspect active sessions and adjust per-session defaults.",
    "sessions.loading": "Loading…",
    "sessions.empty": "No sessions",
    "sessions.refresh": "Refresh",
    "sessions.filter.active": "Active",
    "sessions.filter.limit": "Limit",
    "sessions.filter.includeGlobal": "Include global",
    "sessions.filter.includeUnknown": "Include unknown",
    "sessions.delete": "Delete",
    "sessions.patch": "Patch",
    "sessions.store": "Store:",
    "sessions.table.key": "Key",
    "sessions.table.label": "Label",
    "sessions.table.kind": "Kind",
    "sessions.table.updated": "Updated",
    "sessions.table.tokens": "Tokens",
    "sessions.table.thinking": "Thinking",
    "sessions.table.verbose": "Verbose",
    "sessions.table.reasoning": "Reasoning",
    "sessions.table.actions": "Actions",
    "sessions.optional": "(optional)",
    "sessions.inherit": "inherit",
    "sessions.card.title": "Sessions",
    "sessions.card.subtitle": "Active session keys and per-session overrides.",
    // Cron
    "cron.title": "Cron Jobs",
    "cron.subtitle": "Schedule wakeups and recurring agent runs.",
    "cron.loading": "Loading…",
    "cron.refresh": "Refresh",
    "cron.add": "Add",
    "cron.remove": "Remove",
    "cron.run": "Run",
    "cron.toggle": "Toggle",
    "cron.enabled": "Enabled",
    "cron.disabled": "Disabled",
    "cron.runs": "Runs",
    "cron.runs.empty": "No runs",
    "cron.form.schedule": "Schedule",
    "cron.form.sessionKey": "Session Key",
    "cron.form.message": "Message",
    "cron.scheduler.title": "Scheduler",
    "cron.scheduler.subtitle": "Gateway-owned cron scheduler status.",
    "cron.scheduler.nextWake": "Next wake",
    "cron.scheduler.jobs": "Jobs",
    "cron.newJob.title": "New Job",
    "cron.newJob.subtitle": "Create a scheduled wakeup or agent run.",
    "cron.form.name": "Name",
    "cron.form.description": "Description",
    "cron.form.agentId": "Agent ID",
    "cron.form.wakeMode": "Wake mode",
    "cron.form.payload": "Payload",
    "cron.form.systemText": "System text",
    "cron.form.agentMessage": "Agent message",
    "cron.form.deliver": "Deliver",
    "cron.form.channel": "Channel",
    "cron.jobs.title": "Jobs",
    "cron.jobs.subtitle": "All scheduled jobs stored in the gateway.",
    "cron.runs.title": "Run history",
    "cron.runs.subtitle": "Latest runs for {jobId}.",
    "cron.runs.selectJob": "Select a job to inspect run history.",
    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Manage skill availability and API key injection.",
    "skills.loading": "Loading…",
    "skills.refresh": "Refresh",
    "skills.filter": "Filter",
    "skills.install": "Install",
    "skills.update": "Update",
    "skills.enable": "Enable",
    "skills.disable": "Disable",
    "skills.apiKey": "API Key",
    "skills.apiKey.save": "Save",
    "skills.apiKey.placeholder": "Enter API key…",
    "skills.card.title": "Skills",
    "skills.card.subtitle": "Bundled, managed, and workspace skills.",
    "skills.search.placeholder": "Search skills",
    "skills.shown": "{count} shown",
    "skills.eligible": "eligible",
    "skills.blocked": "blocked",
    "skills.missing": "Missing:",
    "skills.reason": "Reason:",
    "skills.installing": "Installing…",
    "skills.saveKey": "Save key",
    // Nodes
    "nodes.title": "Nodes",
    "nodes.subtitle": "Paired devices, capabilities, and command exposure.",
    "nodes.loading": "Loading…",
    "nodes.refresh": "Refresh",
    "nodes.devices.refresh": "Refresh",
    "nodes.devices.title": "Devices",
    "nodes.devices.empty": "No devices",
    "nodes.device.approve": "Approve",
    "nodes.device.reject": "Reject",
    "nodes.device.revoke": "Revoke",
    "nodes.device.rotate": "Rotate",
    "nodes.card.title": "Nodes",
    "nodes.card.subtitle": "Paired devices and live links.",
    "nodes.execApprovals.title": "Exec approvals",
    "nodes.execApprovals.subtitle": "Allowlist and approval policy for exec host=gateway/node.",
    "nodes.execApprovals.target.title": "Target",
    "nodes.execApprovals.target.subtitle": "Gateway edits local approvals; node edits the selected node.",
    "nodes.execApprovals.target.host": "Host",
    "nodes.execApprovals.target.node": "Node",
    "nodes.execApprovals.target.selectNode": "Select node",
    "nodes.execApprovals.target.noNodes": "No nodes advertise exec approvals yet.",
    "nodes.execApprovals.load": "Load approvals",
    "nodes.execApprovals.loadText": "Load exec approvals to edit allowlists.",
    "nodes.execApprovals.scope": "Scope",
    "nodes.execApprovals.defaults": "Defaults",
    "nodes.execApprovals.security.title": "Security",
    "nodes.execApprovals.security.subtitle": "Default security mode.",
    "nodes.execApprovals.security.subtitleAgent": "Default: {security}.",
    "nodes.execApprovals.security.mode": "Mode",
    "nodes.execApprovals.security.useDefault": "Use default ({security})",
    "nodes.execApprovals.ask.title": "Ask",
    "nodes.execApprovals.ask.subtitle": "Default prompt policy.",
    "nodes.execApprovals.ask.subtitleAgent": "Default: {ask}.",
    "nodes.execApprovals.askFallback.title": "Ask fallback",
    "nodes.execApprovals.askFallback.subtitle": "Applied when the UI prompt is unavailable.",
    "nodes.execApprovals.askFallback.subtitleAgent": "Default: {fallback}.",
    "nodes.execApprovals.askFallback.fallback": "Fallback",
    "nodes.execApprovals.autoAllow.title": "Auto-allow skill CLIs",
    "nodes.execApprovals.autoAllow.subtitle": "Allow skill executables listed by the Gateway.",
    "nodes.execApprovals.autoAllow.subtitleDefault": "Using default ({value}).",
    "nodes.execApprovals.autoAllow.subtitleOverride": "Override ({value}).",
    "nodes.execApprovals.allowlist.title": "Allowlist",
    "nodes.execApprovals.allowlist.subtitle": "Case-insensitive glob patterns.",
    "nodes.execApprovals.allowlist.addPattern": "Add pattern",
    "nodes.execApprovals.allowlist.empty": "No allowlist entries yet.",
    "nodes.execApprovals.allowlist.pattern": "Pattern",
    "nodes.execApprovals.allowlist.newPattern": "New pattern",
    "nodes.execApprovals.allowlist.lastUsed": "Last used:",
    "nodes.execApprovals.allowlist.remove": "Remove",
    "nodes.execApprovals.allowlist.useDefault": "Use default",
    "nodes.bindings.title": "Exec node binding",
    "nodes.bindings.subtitle": "Pin agents to a specific node when using exec host=node.",
    "nodes.bindings.loadText": "Load config to edit bindings.",
    "nodes.bindings.loadConfig": "Load config",
    "nodes.bindings.switchForm": "Switch the Config tab to <strong>Form</strong> mode to edit bindings here.",
    "nodes.bindings.default.title": "Default binding",
    "nodes.bindings.default.subtitle": "Used when agents do not override a node binding.",
    "nodes.bindings.default.node": "Node",
    "nodes.bindings.default.anyNode": "Any node",
    "nodes.bindings.default.noNodes": "No nodes with system.run available.",
    "nodes.bindings.agent.title": "Agent",
    "nodes.bindings.agent.default": "default agent",
    "nodes.bindings.agent.usesDefault": "uses default ({binding})",
    "nodes.bindings.agent.override": "override: {binding}",
    "nodes.bindings.agent.binding": "Binding",
    "nodes.bindings.agent.useDefault": "Use default",
    "nodes.bindings.noAgents": "No agents found.",
    "nodes.devices.title": "Devices",
    "nodes.devices.subtitle": "Pairing requests + role tokens.",
    "nodes.devices.pending": "Pending",
    "nodes.devices.paired": "Paired",
    "nodes.devices.role": "role:",
    "nodes.devices.requested": "requested",
    "nodes.devices.repair": "· repair",
    "nodes.devices.roles": "roles:",
    "nodes.devices.scopes": "scopes:",
    "nodes.devices.tokens": "Tokens",
    "nodes.devices.tokensNone": "Tokens: none",
    "nodes.devices.active": "active",
    "nodes.devices.revoked": "revoked",
    "nodes.devices.pairedStatus": "paired",
    "nodes.devices.unpairedStatus": "unpaired",
    "nodes.execApprovals.security.deny": "Deny",
    "nodes.execApprovals.security.allowlist": "Allowlist",
    "nodes.execApprovals.security.full": "Full",
    "nodes.execApprovals.ask.off": "Off",
    "nodes.execApprovals.ask.onMiss": "On miss",
    "nodes.execApprovals.ask.always": "Always",
    "nodes.execApprovals.target.gateway": "Gateway",
    // Config
    "config.title": "Config",
    "config.subtitle": "Edit ~/.clawdbot/moltbot.json safely.",
    "config.loading": "Loading…",
    "config.save": "Save",
    "config.apply": "Apply",
    "config.reload": "Reload",
    "config.mode.form": "Form",
    "config.mode.raw": "Raw",
    "config.valid": "Valid",
    "config.invalid": "Invalid",
    "config.saving": "Saving…",
    "config.applying": "Applying…",
    "config.search": "Search",
    "config.settings": "Settings",
    "config.unknown": "unknown",
    "config.noChanges": "No changes",
    "config.search.placeholder": "Search settings...",
    "config.allSettings": "All Settings",
    "config.all": "All",
    "config.update": "Update",
    "config.updating": "Updating…",
    "config.unsavedChanges": "Unsaved changes",
    "config.unsavedChange": "unsaved change",
    "config.unsavedChangesPlural": "unsaved changes",
    "config.viewPendingChanges": "View {count} pending changes",
    "config.viewPendingChange": "View 1 pending change",
    "config.viewPendingChangesPlural": "View {count} pending changes",
    "config.loadingSchema": "Loading schema…",
    "config.formUnsafe": "Form view can't safely edit some fields. Use Raw to avoid losing config entries.",
    "config.rawJson5": "Raw JSON5",
    // Debug
    "debug.title": "Debug",
    "debug.subtitle": "Gateway snapshots, events, and manual RPC calls.",
    "debug.loading": "Loading…",
    "debug.refresh": "Refresh",
    "debug.call.method": "Method",
    "debug.call.params": "Params",
    "debug.call.execute": "Execute",
    "debug.call.result": "Result",
    "debug.call.error": "Error",
    "debug.noIssues": "No critical issues",
    "debug.snapshots.title": "Snapshots",
    "debug.snapshots.subtitle": "Status, health, and heartbeat data.",
    "debug.snapshots.status": "Status",
    "debug.snapshots.health": "Health",
    "debug.snapshots.heartbeat": "Last heartbeat",
    "debug.snapshots.securityAudit": "Security audit: {label}",
    "debug.snapshots.securityAuditInfo": " · {count} info",
    "debug.snapshots.securityAuditCommand": "Run {command} for details.",
    "debug.manualRpc.title": "Manual RPC",
    "debug.manualRpc.subtitle": "Send a raw gateway method with JSON params.",
    "debug.manualRpc.method": "Method",
    "debug.manualRpc.params": "Params (JSON)",
    "debug.manualRpc.call": "Call",
    "debug.models.title": "Models",
    "debug.models.subtitle": "Catalog from models.list.",
    "debug.eventLog.title": "Event Log",
    "debug.eventLog.subtitle": "Latest gateway events.",
    "debug.eventLog.empty": "No events yet.",
    // Config form common
    "configForm.add": "Add",
    "configForm.addEntry": "Add Entry",
    "configForm.removeItem": "Remove item",
    "configForm.resetToDefault": "Reset to default",
    "configForm.select": "Select...",
    "configForm.noItems": "No items yet. Click \"Add\" to create one.",
    "configForm.items": "items",
    "configForm.item": "item",
    "configForm.customEntries": "Custom entries",
    "configForm.unsupportedArraySchema": "Unsupported array schema. Use Raw mode.",
    "configForm.unsupportedType": "Unsupported type: {type}. Use Raw mode.",
    "configForm.unsupportedSchemaNode": "Unsupported schema node. Use Raw mode.",
    // Logs
    "logs.title": "Logs",
    "logs.subtitle": "Live tail of the gateway file logs.",
    "logs.loading": "Loading…",
    "logs.refresh": "Refresh",
    "logs.filter": "Filter",
    "logs.autoFollow": "Auto-follow",
    "logs.truncated": "Truncated",
    "logs.lastUpdated": "Last updated: {timestamp}",
    "logs.search.placeholder": "Search logs",
    "logs.card.title": "Logs",
    "logs.card.subtitle": "Gateway file logs (JSONL).",
    "logs.export.filtered": "Export filtered",
    "logs.export.visible": "Export visible",
    "logs.file": "File:",
    "logs.truncated.message": "Log output truncated; showing latest chunk.",
    "logs.level.trace": "trace",
    "logs.level.debug": "debug",
    "logs.level.info": "info",
    "logs.level.warn": "warn",
    "logs.level.error": "error",
    "logs.level.fatal": "fatal",
    // Skill descriptions
    "skill.description.1password": "Set up and use 1Password CLI (op). Use when installing the CLI, enabling desktop app integration, signing in (single or multi-account), or accessing 1Password credentials.",
    "skill.description.apple-notes": "Manage Apple Notes via the 'memo' CLI on macOS (create, view, edit, delete, search, move, and export notes). Use when a user asks Moltbot to work with Apple Notes.",
    "skill.description.apple-reminders": "Manage Apple Reminders via the 'remindctl' CLI on macOS (list, add, edit, complete, delete). Supports lists, date filters, and JSON/plain output.",
    "skill.description.bear-notes": "Manage Bear notes via the 'bear' CLI on macOS (create, edit, search, tag, archive, delete). Supports tags, links, and Markdown formatting.",
    "skill.description.bird": "X/Twitter CLI for reading, searching, posting, and engagement via cookies.",
    "skill.description.blogwatcher": "Monitor blogs and RSS/Atom feeds for updates using the blogwatcher CLI.",
    "skill.description.blucli": "BluOS CLI (blu) for discovery, playback, grouping, and volume.",
    "skill.description.bluebubbles": "Build or update the BlueBubbles external channel plugin for Moltbot (extension package, REST send/probe, webhook inbound).",
    "skill.description.camsnap": "Capture frames or clips from RTSP/ONVIF cameras.",
    "skill.description.clawdhub": "Use the ClawdHub CLI to search, install, update, and publish agent skills from clawdhub.com. Use when you need to fetch new skills on the fly, sync installed skills to latest or a specific version, or publish new/updated skill folders with the npm-installed clawdhub CLI.",
    "skill.description.coding-agent": "Run Codex CLI, Claude Code, OpenCode, or Pi Coding Agent via background process for programmatic control.",
    "skill.description.trello": "Manage Trello boards, lists, and cards via the Trello REST API.",
    "skill.description.video-frames": "Extract frames or short clips from videos using ffmpeg.",
    "skill.description.voice-call": "Start voice calls via the Moltbot voice-call plugin.",
    "skill.description.wacli": "Send WhatsApp messages to other people or search/sync WhatsApp history via the wacli CLI (not for normal user chats).",
    "skill.description.weather": "Get current weather and forecasts (no API key required).",
    "skill.description.tmux": "Remote-control tmux sessions for interactive CLIs by sending keystrokes and scraping pane output.",
    "skill.description.things-mac": "Manage Things 3 via the `things` CLI on macOS (add/update projects+todos via URL scheme; read/search/list from the local Things database). Use when a user asks Moltbot to add a task to Things, list inbox/today/upcoming, search tasks, or inspect projects/areas/tags.",
    "skill.description.summarize": "Summarize or extract text/transcripts from URLs, podcasts, and local files (great fallback for \"transcribe this YouTube/video\").",
    "skill.description.sonoscli": "Control Sonos speakers (discover/status/play/volume/group).",
    "skill.description.spotify-player": "Terminal Spotify playback/search via spogo (preferred) or spotify_player.",
    "skill.description.songsee": "Generate spectrograms and feature-panel visualizations from audio with the songsee CLI.",
    "skill.description.slack": "Use when you need to control Slack from Moltbot via the slack tool, including reacting to messages or pinning/unpinning items in Slack channels or DMs.",
    "skill.description.skill-creator": "Create or update AgentSkills. Use when designing, structuring, or packaging skills with scripts, references, and assets.",
    "skill.description.sherpa-onnx-tts": "Local text-to-speech via sherpa-onnx (offline, no cloud)",
    "skill.description.session-logs": "Search and analyze your own session logs (older/parent conversations) using jq.",
    "skill.description.sag": "ElevenLabs text-to-speech with mac-style say UX.",
    "skill.description.ordercli": "Foodora-only CLI for checking past orders and active order status (Deliveroo WIP).",
    "skill.description.peekaboo": "Capture and automate macOS UI with the Peekaboo CLI.",
    "skill.description.openhue": "Control Philips Hue lights/scenes via the OpenHue CLI.",
    "skill.description.oracle": "Best practices for using the oracle CLI (prompt + file bundling, engines, sessions, and file attachment patterns).",
    "skill.description.openai-whisper": "Local speech-to-text with the Whisper CLI (no API key).",
    "skill.description.openai-whisper-api": "Transcribe audio via OpenAI Audio Transcriptions API (Whisper).",
    "skill.description.openai-image-gen": "Batch-generate images via OpenAI Images API. Random prompt sampler + `index.html` gallery.",
    "skill.description.notion": "Notion API for creating and managing pages, databases, and blocks.",
    "skill.description.obsidian": "Work with Obsidian vaults (plain Markdown notes) and automate via obsidian-cli.",
    "skill.description.nano-pdf": "Edit PDFs with natural-language instructions using the nano-pdf CLI.",
    "skill.description.nano-banana-pro": "Generate or edit images via Gemini 3 Pro Image (Nano Banana Pro).",
    "skill.description.model-usage": "Use CodexBar CLI local cost usage to summarize per-model usage for Codex or Claude, including the current (most recent) model or a full model breakdown. Trigger when asked for model-level usage/cost data from codexbar, or when you need a scriptable per-model summary from codexbar cost JSON.",
    "skill.description.mcporter": "Use the mcporter CLI to list, configure, auth, and call MCP servers/tools directly (HTTP or stdio), including ad-hoc servers, config edits, and CLI/type generation.",
    "skill.description.local-places": "Search for places (restaurants, cafes, etc.) via Google Places API proxy on localhost.",
    "skill.description.imsg": "iMessage/SMS CLI for listing chats, history, watch, and sending.",
    "skill.description.himalaya": "CLI to manage emails via IMAP/SMTP. Use `himalaya` to list, read, write, reply, forward, search, and organize emails from the terminal. Supports multiple accounts and message composition with MML (MIME Meta Language).",
    "skill.description.goplaces": "Query Google Places API (New) via the goplaces CLI for text search, place details, resolve, and reviews. Use for human-friendly place lookup or JSON output for scripts.",
    "skill.description.gog": "Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs.",
    "skill.description.github": "Interact with GitHub using the `gh` CLI. Use `gh issue`, `gh pr`, `gh run`, and `gh api` for issues, PRs, CI runs, and advanced queries.",
    "skill.description.gemini": "Gemini CLI for one-shot Q&A, summaries, and generation.",
    "skill.description.gifgrep": "Search GIF providers with CLI/TUI, download results, and extract stills/sheets.",
    "skill.description.eightctl": "Control Eight Sleep pods (status, temperature, alarms, schedules).",
    "skill.description.food-order": "Reorder Foodora orders + track ETA/status with ordercli. Never confirm without explicit user approval. Triggers: order food, reorder, track ETA.",
    "skill.description.discord": "Use when you need to control Discord from Moltbot via the discord tool: send messages, react, post or upload stickers, upload emojis, run polls, manage threads/pins/search, create/edit/delete channels and categories, fetch permissions or member/role/channel info, or handle moderation actions in Discord DMs or channels.",
    // Config sections
    "config.section.env": "Environment Variables",
    "config.section.update": "Updates",
    "config.section.agents": "Agents",
    "config.section.auth": "Authentication",
    "config.section.channels": "Channels",
    "config.section.messages": "Messages",
    "config.section.commands": "Commands",
    "config.section.hooks": "Hooks",
    "config.section.skills": "Skills",
    "config.section.tools": "Tools",
    "config.section.gateway": "Gateway",
    "config.section.wizard": "Setup Wizard",
    "config.section.meta": "Metadata",
    "config.section.logging": "Logging",
    "config.section.browser": "Browser",
    "config.section.ui": "UI",
    "config.section.models": "Models",
    "config.section.bindings": "Bindings",
    "config.section.broadcast": "Broadcast",
    "config.section.audio": "Audio",
    "config.section.session": "Session",
    "config.section.cron": "Cron",
    "config.section.web": "Web",
    "config.section.discovery": "Discovery",
    "config.section.canvasHost": "Canvas Host",
    "config.section.talk": "Talk",
    "config.section.plugins": "Plugins",
    "config.section.env.description": "Environment variables passed to the gateway process",
    "config.section.update.description": "Auto-update settings and release channel",
    "config.section.agents.description": "Agent configurations, models, and identities",
    "config.section.auth.description": "API keys and authentication profiles",
    "config.section.channels.description": "Messaging channels (Telegram, Discord, Slack, etc.)",
    "config.section.messages.description": "Message handling and routing settings",
    "config.section.commands.description": "Custom slash commands",
    "config.section.hooks.description": "Webhooks and event hooks",
    "config.section.skills.description": "Skill packs and capabilities",
    "config.section.tools.description": "Tool configurations (browser, search, etc.)",
    "config.section.gateway.description": "Gateway server settings (port, auth, binding)",
    "config.section.wizard.description": "Setup wizard state and history",
    "config.section.meta.description": "Gateway metadata and version information",
    "config.section.logging.description": "Log levels and output configuration",
    "config.section.browser.description": "Browser automation settings",
    "config.section.ui.description": "User interface preferences",
    "config.section.models.description": "AI model configurations and providers",
    "config.section.bindings.description": "Key bindings and shortcuts",
    "config.section.broadcast.description": "Broadcast and notification settings",
    "config.section.audio.description": "Audio input/output settings",
    "config.section.session.description": "Session management and persistence",
    "config.section.cron.description": "Scheduled tasks and automation",
    "config.section.web.description": "Web server and API settings",
    "config.section.discovery.description": "Service discovery and networking",
    "config.section.canvasHost.description": "Canvas rendering and display",
    "config.section.talk.description": "Voice and speech settings",
    "config.section.plugins.description": "Plugin management and extensions",
    "config.schemaUnavailable": "Schema unavailable.",
    "config.unsupportedSchema": "Unsupported schema. Use Raw.",
    "config.noSettingsMatch": "No settings match \"{query}\"",
    "config.noSettingsInSection": "No settings in this section",
    "config.unsupportedSchemaNode": "Unsupported schema node. Use Raw mode.",
    // Config form common
    "configForm.add": "Add",
    "configForm.addEntry": "Add Entry",
    "configForm.removeItem": "Remove item",
    "configForm.resetToDefault": "Reset to default",
    "configForm.select": "Select...",
    "configForm.noItems": "No items yet. Click \"Add\" to create one.",
    "configForm.items": "items",
    "configForm.item": "item",
    "configForm.customEntries": "Custom entries",
    "configForm.unsupportedArraySchema": "Unsupported array schema. Use Raw mode.",
    "configForm.unsupportedType": "Unsupported type: {type}. Use Raw mode.",
    // Exec approval
    "execApproval.title": "Exec Approval",
    "execApproval.allowOnce": "Allow Once",
    "execApproval.allowAlways": "Allow Always",
    "execApproval.deny": "Deny",
    "execApproval.request": "Request",
    // Theme
    "theme.system": "System",
    "theme.light": "Light",
    "theme.dark": "Dark",
    // Locale
    "locale.zh": "中文",
    "locale.en": "English",
  },
};

export function getLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") {
      return stored;
    }
  } catch {
    // localStorage not available
  }
  // Default to Chinese
  return "zh";
}

export function setLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
    window.dispatchEvent(new CustomEvent("moltbot-locale-changed", { detail: { locale } }));
  } catch {
    // localStorage not available
  }
}

export function t(key: TranslationKey, vars?: Record<string, string | number>): string {
  const locale = getLocale();
  let message = messages[locale]?.[key];
  
  // Fallback to English if key not found in current locale
  if (!message) {
    message = messages.en?.[key];
  }
  
  // Fallback to key itself if still not found
  if (!message) {
    return `[${key}]`;
  }
  
  // Simple variable substitution: {varName}
  if (vars) {
    for (const [varKey, varValue] of Object.entries(vars)) {
      message = message.replace(new RegExp(`\\{${varKey}\\}`, "g"), String(varValue));
    }
  }
  
  return message;
}
