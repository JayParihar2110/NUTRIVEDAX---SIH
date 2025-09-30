# Contributing to AyurNutri

Thank you for your interest in contributing to AyurNutri! This document provides guidelines for contributing to our comprehensive Ayurvedic practice management platform.

## 🌟 Ways to Contribute

### 1. Code Contributions
- **Frontend Development**: UI/UX improvements, responsive design enhancements
- **Backend Simulation**: API endpoints, data management, authentication
- **Data Science**: Dosha analysis algorithms, nutritional calculations
- **Mobile Development**: Progressive Web App features, mobile optimization

### 2. Content Contributions
- **Ayurvedic Knowledge**: Traditional medicine insights, food property validations
- **Documentation**: User guides, API documentation, code comments
- **Translations**: Multi-language support for global accessibility
- **Food Database**: Regional food additions, nutritional data validation

### 3. Testing & Quality Assurance
- **Bug Reports**: Detailed issue reproduction and documentation
- **Feature Testing**: User acceptance testing for new functionalities
- **Performance Testing**: Load testing, accessibility compliance
- **Security Auditing**: Vulnerability assessment and recommendations

## 🚀 Getting Started

### Development Setup
1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/ayurnutri.git
   cd ayurnutri
   ```
3. **Set up development environment**:
   ```bash
   # Install development dependencies (optional)
   npm install

   # Start local server
   npm start
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Code Standards

#### JavaScript
- Use **ES6+ syntax** with modern JavaScript features
- Follow **camelCase** naming convention
- Add **JSDoc comments** for functions and classes
- Use **const/let** instead of var
- Implement **error handling** with try-catch blocks

#### CSS
- Use **CSS Custom Properties** for consistent theming
- Follow **BEM methodology** for class naming
- Implement **responsive design** with mobile-first approach
- Use **semantic HTML5** elements

#### File Structure
```
ayurnutri/
├── index.html              # Main application entry point
├── style.css               # Comprehensive styling system
├── app.js                  # Core application logic
├── data/                   # Datasets and mock data
│   ├── indian_food.csv     # Food database
│   ├── prakriti.csv        # Dosha characteristics
│   └── sample_data.js      # Mock API responses
├── assets/                 # Images and media
│   ├── images/             # Application images
│   └── icons/              # SVG icons and favicons
├── docs/                   # Documentation
│   ├── api.md              # API documentation
│   ├── user-guide.md       # User guide
│   └── deployment.md       # Deployment instructions
└── tests/                  # Testing files
    ├── unit/               # Unit tests
    └── integration/        # Integration tests
```

## 📝 Commit Guidelines

### Commit Message Format
Use **Conventional Commits** format:
```
type(scope): description

[optional body]

[optional footer]
```

### Commit Types
- **feat**: New feature addition
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code formatting (no logic changes)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```bash
feat(auth): add Google OAuth integration
fix(dosha): correct scoring algorithm for Vata analysis
docs(readme): update installation instructions
style(css): improve responsive design for mobile devices
refactor(api): simplify data fetching logic
test(auth): add unit tests for authentication flow
chore(deps): update Chart.js to v4.5.0
```

## 🔍 Pull Request Process

### Before Submitting
1. **Test your changes** thoroughly on multiple devices
2. **Update documentation** if needed
3. **Follow code style guidelines** consistently
4. **Add appropriate comments** and JSDoc documentation
5. **Ensure responsive design** works on all screen sizes

### Pull Request Template
```markdown
## Description
Brief description of changes made and problem solved.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Manual testing completed
- [ ] Cross-browser compatibility verified
- [ ] Mobile responsiveness checked
- [ ] Accessibility compliance verified

## Screenshots (if applicable)
Add screenshots showing before/after for UI changes.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No console errors or warnings
```

## 🐛 Bug Reports

### Bug Report Template
```markdown
**Bug Description**
Clear description of the bug and expected behavior.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
Description of what should happen.

**Screenshots**
Add screenshots to help explain the problem.

**Environment**
- Browser: [e.g. Chrome 91, Firefox 89]
- Device: [e.g. iPhone 12, Desktop]
- OS: [e.g. Windows 10, macOS Big Sur]
- Screen Resolution: [e.g. 1920x1080]

**Additional Context**
Any other context about the problem.
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Clear description of the feature and its benefits.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
Detailed description of the proposed implementation.

**Alternatives Considered**
Other approaches you've considered.

**User Stories**
- As a [user type], I want [goal] so that [benefit]

**Acceptance Criteria**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

**Additional Context**
Any other context, mockups, or examples.
```

## 📚 Documentation Guidelines

### Code Documentation
- **JSDoc comments** for all functions and classes
- **Inline comments** for complex logic
- **README updates** for new features
- **API documentation** for new endpoints

### User Documentation  
- **Step-by-step guides** with screenshots
- **Video tutorials** for complex features
- **FAQ updates** for common questions
- **Troubleshooting guides** for issues

## 🏆 Recognition

### Contributor Levels
- **First-time Contributor**: Welcome badge and mention
- **Regular Contributor**: Special recognition in releases
- **Core Contributor**: Decision-making participation
- **Maintainer**: Full repository access and responsibility

### Hall of Fame
Outstanding contributors will be featured in:
- **README.md** acknowledgments section
- **Project website** contributor page
- **Social media** recognition posts
- **Conference presentations** about the project

## 📞 Community & Support

### Communication Channels
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Email**: technical-team@ayurnutri.com
- **Documentation**: Complete guides and tutorials

### Code of Conduct
We are committed to providing a welcoming and inspiring community. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## 🙏 Thank You

Every contribution, no matter how small, helps make AyurNutri better for everyone. Thank you for being part of our mission to bridge ancient Ayurvedic wisdom with modern technology!

---

*Happy Contributing! 🌿*
