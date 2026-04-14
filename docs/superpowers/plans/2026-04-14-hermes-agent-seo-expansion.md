# Hermes Agent SEO Expansion Plan

## Goal

Strengthen the site's high-intent Hermes Agent SEO coverage without turning it into a general resource portal.

## Scope

- Add missing Learn pages for CLI, gateway, config, and MCP
- Add missing Troubleshoot pages for gateway failures and skills loading failures
- Update section indexes so the new pages are discoverable from the existing information architecture
- Verify the site still builds successfully

## Tasks

1. Update `content/learn.ts`
   - Add four Learn entries:
     - `hermes-cli-guide`
     - `hermes-gateway-guide`
     - `hermes-config-yaml`
     - `hermes-mcp-guide`
   - Place them under the existing `setup` and `advanced-config` tabs

2. Update `content/troubleshoot.ts`
   - Add two Troubleshoot entries:
     - `gateway-not-working`
     - `skills-not-loading`
   - Place them under existing symptom groups so `/troubleshoot` stays coherent

3. Add bilingual MDX content
   - `content/learn/en/*.mdx`
   - `content/learn/zh/*.mdx`
   - `content/troubleshoot-library/en/*.mdx`
   - `content/troubleshoot-library/zh/*.mdx`

4. Verify
   - Run `npm run build`
   - Confirm the new slugs are included in the generated routes

## Non-goals

- No new top-level navigation item
- No large-scale redesign of Home, Learn, or Troubleshoot
- No attempt to build a general-purpose resources directory
